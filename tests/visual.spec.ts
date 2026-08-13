import { test } from "@playwright/test";

test("desktop visual", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.waitForTimeout(500);
  await page.screenshot({ path: "test-results/next-home-desktop.png", fullPage: true });
});

test("mobile visual", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.waitForTimeout(500);
  await page.screenshot({ path: "test-results/next-home-mobile.png", fullPage: true });
});
