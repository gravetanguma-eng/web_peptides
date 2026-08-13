import { spawn } from "node:child_process";
import { join } from "node:path";

export default async function globalSetup() {
  const nextCli = join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
  const server = spawn(
    process.execPath,
    [nextCli, "start", "--hostname", "127.0.0.1", "--port", "3100"],
    {
      cwd: process.cwd(),
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true
    }
  );

  let startupError = "";
  server.stderr.on("data", (chunk: Buffer) => {
    startupError += chunk.toString();
  });

  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js preview exited before startup.\n${startupError}`);
    }
    try {
      const response = await fetch("http://127.0.0.1:3100/");
      if (response.ok) {
        return async () => {
          server.kill();
          await new Promise<void>((resolve) => {
            if (server.exitCode !== null) resolve();
            else server.once("exit", () => resolve());
            setTimeout(resolve, 3000);
          });
        };
      }
    } catch {
      // The server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  server.kill();
  throw new Error(`Next.js preview did not become ready.\n${startupError}`);
}
