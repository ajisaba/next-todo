import { Page, expect } from "@playwright/test";
import { getClickOption, PageOption } from "../../PageOption";
import AppHeader from "../../../components/AppHeader";
import ListTable from "../../../components/ListTable";

const Locator = {
  title: (page: Page) => page.locator("body > main > h1"),
  itemSchedule: (page: Page) => page.locator("body > main > div > ul > li > a"),

  Table: {
    Header: {
      column: (page: Page, column: number) =>
        page.locator(
          `xpath=//html/body/main/div[1]/div/table/thead/tr/th[${column}]`
        ),
    },
    Body: {
      ...ListTable.Locator.Body,
      date: (page: Page, row: number) => Locator.Table.Body.cell(page, row, 1),
      title: (page: Page, row: number) => Locator.Table.Body.cell(page, row, 2),
      comment: (page: Page, row: number) =>
        Locator.Table.Body.cell(page, row, 3),

      titleLink: (page: Page, row: number) =>
        Locator.Table.Body.title(page, row).filter({ has: page.locator("a") }),
    },
  },
};

const Action = {
  goto: async (page: Page) => await page.goto("/schedule"),
};

const Click = {
  Header: AppHeader.Click,

  itemSchedule: async (page: Page, option?: PageOption) =>
    Locator.itemSchedule(page).click(getClickOption(option)),
  Table: {
    Body: {
      title: async (page: Page, row: number, option?: PageOption) =>
        Locator.Table.Body.titleLink(page, row).click(getClickOption(option)),
    },
  },
};

const Expect = {
  Header: AppHeader,

  title: async (page: Page) =>
    await expect(Locator.title(page)).toHaveText("予定"),

  Table: {
    Header: {
      date: async (page: Page) =>
        await expect(Locator.Table.Header.column(page, 1)).toHaveText("日時"),
      title: async (page: Page) =>
        await expect(Locator.Table.Header.column(page, 2)).toHaveText(
          "タイトル"
        ),
      comment: async (page: Page) =>
        await expect(Locator.Table.Header.column(page, 3)).toHaveText("内容"),
    },
    Body: {
      cell: async (page: Page, row: number, column: number, expected: string) =>
        await expect(Locator.Table.Body.cell(page, row, column)).toHaveText(
          expected
        ),

      title: async (page: Page, row: number, expected: string) =>
        await expect(Locator.Table.Body.title(page, row)).toHaveText(expected),
    },
  },
};

const Assert = {
  Table: {
    Header: {
      init: async (page: Page) => {
        await Expect.Table.Header.date(page);
        await Expect.Table.Header.title(page);
        await Expect.Table.Header.comment(page);
      },
    },
    Body: {
      row: async (page: Page, row: number, expected: string[]) => {
        await Expect.Table.Body.cell(page, row, 1, expected[0]);
        await Expect.Table.Body.cell(page, row, 2, expected[1]);
        await Expect.Table.Body.cell(page, row, 3, expected[2]);
      },
    },
  },

  init: async (page: Page) => {
    await Expect.Header.Assert.init(page);

    await Expect.title(page);
  },
};

export default {
  Action,
  Locator,
  Click,
  Assert,
};
