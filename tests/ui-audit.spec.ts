import { expect, test } from "@playwright/test";

const viewports = [
  { width: 1440, height: 900 },
  { width: 1280, height: 800 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 736, height: 898 },
  { width: 640, height: 898 },
  { width: 390, height: 844 },
  { width: 375, height: 812 }
] as const;

test("capture responsive UI audit", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "One browser is sufficient for audit captures");
  await page.emulateMedia({ reducedMotion: "reduce" });

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("body")).toBeVisible();

    await page.evaluate(async () => {
      const step = Math.max(window.innerHeight * 0.75, 480);
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 80));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(350);

    const overflow = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth
    }));
    expect(overflow.content).toBeLessThanOrEqual(overflow.viewport);

    await page.screenshot({
      path: `test-results/audit/baseline-${viewport.width}x${viewport.height}.png`,
      fullPage: true
    });
    await page.screenshot({
      path: `test-results/audit/viewport-${viewport.width}x${viewport.height}.png`
    });

    if (viewport.width === 1440 || viewport.width === 640 || viewport.width === 390) {
      const sections = ["about", "manufacturing", "quality", "products", "contact"] as const;
      for (const section of sections) {
        await page.locator(`#${section}`).screenshot({
          path: `test-results/audit/${section}-${viewport.width}.png`
        });
      }
      await page.locator("footer").screenshot({
        path: `test-results/audit/footer-${viewport.width}.png`
      });
    }
  }
});

test("audit all public routes for overflow and console errors", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "One browser is sufficient for route audit");
  const routes = [
    "/",
    "/about",
    "/products",
    "/products/product-placeholder-01",
    "/privacy",
    "/terms"
  ];
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 390, height: 844 }
  ]) {
    await page.setViewportSize(viewport);
    for (const route of routes) {
      await page.goto(route);
      await page.waitForLoadState("networkidle");
      const overflow = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth
      }));
      expect(overflow.content, `${route} at ${viewport.width}px`).toBeLessThanOrEqual(
        overflow.viewport
      );
      await page.evaluate(async () => {
        const step = Math.max(window.innerHeight * 0.75, 480);
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 60));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(250);
      const slug = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
      await page.screenshot({
        path: `test-results/audit/route-${slug}-${viewport.width}.png`,
        fullPage: true
      });
    }
  }

  expect(errors).toEqual([]);
});
