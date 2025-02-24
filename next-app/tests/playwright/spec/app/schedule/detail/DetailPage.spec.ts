import { test } from "@playwright/test";
import TopPage from "../../../../lib/pages/app/TopPage";
import SchedulePage from "../../../../lib/pages/app/schedule/SchedulePage";
import DetailPage from "../../../../lib/pages/app/schedule/detail/DetailPage";

test.describe("スケジュール詳細画面テスト", () => {
  test("遷移と初期表示の確認", async ({ page }) => {
    await TopPage.Action.goto(page);
    await TopPage.Assert.init(page);
    await TopPage.Click.itemSchedule(page);
    await SchedulePage.Assert.init(page);
    await SchedulePage.Click.Table.Body.title(page, 1);
    await DetailPage.Assert.init(page);
  });
});
