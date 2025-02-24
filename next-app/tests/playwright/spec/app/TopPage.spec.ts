import { test } from "@playwright/test";
import TopPage from "../../lib/pages/app/TopPage";
import SchedulePage from "../../lib/pages/app/schedule/SchedulePage";

test.describe("トップ画面テスト", () => {
  test.beforeEach(async ({ page }) => {
    await TopPage.Action.goto(page);
  });

  test("初期表示", async ({ page }) => {
    await TopPage.Assert.init(page);
  });

  test("予定画面への遷移", async ({ page }) => {
    await TopPage.Assert.init(page);
    await TopPage.Click.itemSchedule(page);
    await SchedulePage.Assert.init(page);
  });
});
