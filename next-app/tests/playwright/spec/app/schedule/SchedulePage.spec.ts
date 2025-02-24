import { test, expect } from "@playwright/test";
import TopPage from "../../../lib/pages/app/TopPage";
import SchedulePage from "../../../lib/pages/app/schedule/SchedulePage";

test.describe("スケジュール画面テスト", () => {
  test("遷移と初期表示の確認", async ({ page }) => {
    await TopPage.Action.goto(page);
    await TopPage.Assert.init(page);
    await TopPage.Click.itemSchedule(page);
    await SchedulePage.Assert.init(page);
  });

  test.describe("一覧のテスト", () => {
    test.beforeEach(async ({ page }) => {
      await SchedulePage.Action.goto(page);
      await SchedulePage.Assert.init(page);
    });

    test("ヘッダーの確認", async ({ page }) => {
      await SchedulePage.Assert.Table.Header.init(page);
    });
  });

  test.describe("共通ヘッダーのテスト", () => {
    test.beforeEach(async ({ page }) => {
      await SchedulePage.Action.goto(page);
      await SchedulePage.Assert.init(page);
    });

    test("ホーム画面への遷移", async ({ page }) => {
      await SchedulePage.Click.Header.top(page);
      await TopPage.Assert.init(page);
    });
  });
});
