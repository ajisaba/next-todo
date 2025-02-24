import { Page, expect } from "@playwright/test";
import AppHeader from "../../components/AppHeader";
import { getClickOption, PageOption } from "../PageOption";

const Locator = {
  title: (page: Page) => page.locator("body > main > h1"),
  itemSchedule: (page: Page) => page.locator("body > main > div > ul > li > a"),
};

const Action = {
  goto: async (page: Page) => await page.goto("/"),
};

const Click = {
  Header: AppHeader.Click,

  itemSchedule: async (page: Page, option?: PageOption) =>
    Locator.itemSchedule(page).click(getClickOption(option)),
};

const Expect = {
  Header: AppHeader.Expect,

  title: async (page: Page) =>
    await expect(Locator.title(page)).toHaveText("Next-Todo"),
  itemSchedule: async (page: Page) =>
    await expect(Locator.itemSchedule(page)).toHaveText("予定"),
};

const Assert = {
  init: async (page: Page) => {
    await AppHeader.Assert.init(page);

    await Expect.title(page);
    await Expect.itemSchedule(page);
  },
};

export default {
  Action,
  Locator,
  Click,
  Assert,
};
