import { Page, expect } from "@playwright/test";
import { getClickOption, PageOption } from "../../../PageOption";
import DetailTable from "../../../../components/DetailTable";

const Locator = {
  title: (page: Page) => page.locator("body > main > h1"),
  Table: {
    ...DetailTable.Locator,
  },
};

const Action = {
  goto: async (page: Page, id: number) => await page.goto(`/schedule/${id}`),
};

const Click = {};

const Expect = {
  title: async (page: Page) =>
    await expect(Locator.title(page)).toHaveText("予定"),
  Table: {
    Header: {},
  },
};

const Assert = {
  init: async (page: Page) => {
    await Expect.title(page);
  },
};

export default {
  Action,
  Locator,
  Click,
  Assert,
};
