import { test, expect } from "@playwright/test";
import HomePage from "../../../lib/pages/app/HomePage";
import SchedulePage from "../../../lib/pages/app/schedule/SchedulePage";

test.describe("スケジュール画面テスト", () => {
  test("遷移と初期表示の確認", async ({ page }) => {
    await HomePage.Action.goto(page);
    await HomePage.Assert.init(page);
    await HomePage.Click.itemSchedule(page);
    await SchedulePage.Assert.init(page);
  });

  test.describe("一覧のテスト", () => {
    test.beforeEach(async ({ page }) => {
      await SchedulePage.Action.goto(page);
    });

    test("ヘッダーの確認", async ({ page }) => {
      await SchedulePage.Assert.Table.Header.init(page);
    });
  });
});
