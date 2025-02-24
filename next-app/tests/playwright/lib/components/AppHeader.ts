import { expect, Page } from "@playwright/test";
import { getClickOption, PageOption } from "../pages/PageOption";

const Locator = {
  Menu: {
    home: (page: Page) => page.locator("#top-menu-home"),
  },
};

const Expect = {
  Menu: {
    home: async (page: Page) =>
      await expect(Locator.Menu.home(page)).toHaveText("Home"),
  },
};

const Click = {
  home: async (page: Page, option?: PageOption) =>
    await Locator.Menu.home(page).click(getClickOption(option)),
};

const Assert = {
  init: async (page: Page) => {
    await Expect.Menu.home(page);
  },
};

export default {
  Locator,
  Click,
  Expect,
  Assert,
};
