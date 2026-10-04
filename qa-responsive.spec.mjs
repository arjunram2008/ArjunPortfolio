import { test, expect } from "@playwright/test";

for (const width of [320, 390, 768, 1280, 1920]) {
  test(`portfolio navigation and content at ${width}px`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 844 });
    await page.goto("http://127.0.0.1:5173/");
    await expect(
      page.getByRole("heading", { name: "Arjun Ramesh." }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth,
      ),
    ).toBeTruthy();
    expect(await page.locator("body").innerText()).not.toContain("\u2014");
    if (width <= 760) {
      await page.getByRole("button", { name: "Open menu" }).click();
      await expect(page.getByRole("navigation")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("navigation")).toBeHidden();
    }
    await page.getByRole("link", { name: "Explore my work" }).click();
    await expect(
      page.getByRole("heading", { name: "Ideas out in the world." }),
    ).toBeInViewport();
    await page.locator("#true-fit summary").click();
    await expect(page.locator("#true-fit details")).toHaveAttribute("open", "");
    await page.getByRole("button", { name: /ACM, UC Santa Cruz/ }).click();
    await expect(page.locator("#experience-acm")).toBeVisible();
    await expect(page.locator("#experience-randlab")).toBeHidden();
    const response = await page.request.get(
      "http://127.0.0.1:5173/Arjun-Ramesh-Resume.pdf",
    );
    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("application/pdf");
    expect(errors).toEqual([]);
  });
}

test("desktop image ribbon moves with page scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 844 });
  await page.goto("http://127.0.0.1:5173/");
  const position = await page
    .locator(".ribbon-section")
    .evaluate((el) => el.offsetTop);
  await page.evaluate((top) => window.scrollTo(0, top), position);
  const before = await page
    .locator(".ribbon-track")
    .evaluate((el) => el.getBoundingClientRect().left);
  await page.mouse.wheel(0, 800);
  await expect
    .poll(() =>
      page
        .locator(".ribbon-track")
        .evaluate((el) => el.getBoundingClientRect().left),
    )
    .toBeLessThan(before - 150);
});

test("reduced motion shows a static gallery without pinned scroll", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("http://127.0.0.1:5173/");
  await expect(page.locator(".ribbon-section")).toHaveClass(/motion-off/);
  expect(
    await page
      .locator(".ribbon-sticky")
      .evaluate((el) => getComputedStyle(el).position),
  ).toBe("static");
  expect(
    await page.locator("html").evaluate((el) => el.classList.contains("lenis")),
  ).toBe(false);
});
