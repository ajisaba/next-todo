import { expect, Page } from "@playwright/test";
import { getClickOption, PageOption } from "../pages/PageOption";

const Locator = {
  Menu: {
    top: (page: Page) => page.locator("#header-menu-top"),
  },
};

const Expect = {
  Menu: {
    top: async (page: Page) =>
      await expect(Locator.Menu.top(page)).toHaveText("Top"),
  },
};

const Click = {
  top: async (page: Page, option?: PageOption) =>
    await Locator.Menu.top(page).click(getClickOption(option)),
};

const Assert = {
  init: async (page: Page) => {
    await Expect.Menu.top(page);
  },
};

export default {
  Locator,
  Click,
  Expect,
  Assert,
};
