import { test, expect } from "@playwright/test";
import AppHeader from "../../../lib/components/AppHeader";
import TopPage from "../../../lib/pages/app/TopPage";
import SchedulePage from "../../../lib/pages/app/schedule/SchedulePage";

test.describe("共通ヘッダーテスト", () => {
  test.beforeEach(async ({ page }) => {
    await TopPage.Action.goto(page);
  });

  test("初期表示", async ({ page }) => {
    await AppHeader.Assert.init(page);
  });

  test("スケジュールページからホームページへの遷移", async ({ page }) => {
    await SchedulePage.Action.goto(page);
    await AppHeader.Click.top(page);
    await TopPage.Assert.init(page);
  });
});
