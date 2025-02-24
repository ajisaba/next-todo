import { test, expect } from "@playwright/test";
import HomePage from "../../lib/pages/app/HomePage";
import SchedulePage from "../../lib/pages/app/schedule/SchedulePage";

test.describe("トップ画面テスト", () => {
  test.beforeEach(async ({ page }) => {
    await HomePage.Action.goto(page);
  });

  test("初期表示", async ({ page }) => {
    await HomePage.Assert.init(page);
  });

  test("予定画面への遷移", async ({ page }) => {
    await HomePage.Assert.init(page);
    await HomePage.Click.itemSchedule(page);
    await SchedulePage.Assert.init(page);
  });
});
