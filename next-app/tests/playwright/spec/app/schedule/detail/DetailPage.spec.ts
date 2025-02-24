import { test } from "@playwright/test";
import HomePage from "../../../../lib/pages/app/HomePage";
import SchedulePage from "../../../../lib/pages/app/schedule/SchedulePage";
import DetailPage from "../../../../lib/pages/app/schedule/detail/DetailPage";

test.describe("スケジュール詳細画面テスト", () => {
  test("遷移と初期表示の確認", async ({ page }) => {
    await HomePage.Action.goto(page);
    await HomePage.Assert.init(page);
    await HomePage.Click.itemSchedule(page);
    await SchedulePage.Assert.init(page);
    await SchedulePage.Click.Table.Body.title(page, 1);
    await DetailPage.Assert.init(page);
  });
});
