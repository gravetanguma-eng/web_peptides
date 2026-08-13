import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("renders navigation and both conversion paths", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName(
    "Precision for every peptide program."
  );
  const whatsapp = page.getByRole("link", { name: "Contact Us on WhatsApp" }).first();
  await expect(whatsapp).toHaveAttribute("href", /https:\/\/wa\.me\//);
  await expect(page.getByRole("link", { name: "Explore Our Products" })).toHaveAttribute(
    "href",
    "/products"
  );
  await expect(page.getByRole("link", { name: "Manufacturing", exact: true }).first()).toHaveAttribute(
    "href",
    "/#manufacturing"
  );
});

test("product cards reach generated detail pages", async ({ page }) => {
  await page.goto("/products");
  const firstProduct = page.getByRole("link", { name: /Retatrutide/ });
  await expect(firstProduct).toHaveAttribute("href", "/products/product-placeholder-01");
  await firstProduct.click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Retatrutide");
});

test("mobile menu opens and closes with Escape", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile-only interaction");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.locator("#mobile-navigation")).toHaveAttribute("aria-hidden", "false");
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-navigation")).toHaveAttribute("aria-hidden", "true");
});

test("has no automatically detectable accessibility violations", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("does not overflow the viewport horizontally", async ({ page }) => {
  await page.goto("/");
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});

test("shows all manufacturing steps without an expansion control", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Concentration & Lyophilization" })).toBeVisible();
  await expect(page.getByRole("button", { name: /remaining process steps/i })).toHaveCount(0);
});

test("switches manufacturing focus images", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("img", {
      name: "Clean manufacturing suite with stainless processing equipment and production staff"
    })
  ).toBeVisible();

  await page.getByRole("button", { name: "Show next manufacturing image" }).click();
  await expect(
    page.getByRole("img", {
      name: "Technicians working with a large stainless steel industrial reactor"
    })
  ).toBeVisible();
});

test("switches certificate documents", async ({ page }) => {
  await page.goto("/");
  const firstCertificate = page.getByRole("img", {
    name: "Reta30 Certificate of Analysis"
  });
  await firstCertificate.scrollIntoViewIfNeeded();
  await expect(firstCertificate).toBeVisible();

  await page.getByRole("button", { name: "Show next certificate" }).click();
  await expect(
    page.getByRole("img", { name: "Admax Certificate of Analysis" })
  ).toBeVisible();
});

test("keeps anchored section headings below the fixed header", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop navigation check");
  await page.goto("/#quality");
  const heading = page.getByRole("heading", { name: "Evidence before claims." });
  await expect(heading).toBeVisible();
  const top = await heading.evaluate((element) => element.getBoundingClientRect().top);
  expect(top).toBeGreaterThanOrEqual(96);
});

test("respects reduced motion and has no console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator("#quality").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { name: "Evidence before claims." })).toBeVisible();
  expect(errors).toEqual([]);
});

test("hero video loads and is decodable", async ({ page }) => {
  await page.goto("/");
  const video = page.locator("video");
  await expect(video).toHaveAttribute("poster", /hero-lab-placeholder\.png/);
  const metadata = await video.evaluate((element: HTMLVideoElement) =>
    new Promise<{ width: number; height: number; duration: number }>((resolve, reject) => {
      const read = () =>
        resolve({
          width: element.videoWidth,
          height: element.videoHeight,
          duration: element.duration
        });
      if (element.readyState >= HTMLMediaElement.HAVE_METADATA) read();
      else {
        element.addEventListener("loadedmetadata", read, { once: true });
        element.addEventListener("error", () => reject(new Error("Video decoding failed")), {
          once: true
        });
      }
    })
  );
  expect(metadata.width).toBeGreaterThan(0);
  expect(metadata.height).toBeGreaterThan(0);
  expect(metadata.duration).toBeGreaterThan(0);
});
