import { Page } from "@playwright/test";

const Locator = {
  Header: {
    column: (page: Page, column: number) =>
      page.locator(`table > theader > tr > th:nth-child(${column})`),
  },
  Body: {
    cell: (page: Page, row: number, column: number) =>
      page.locator(
        `table > tbody > tr:nth-child(${row}) > td:nth-child(${column})`
      ),
  },
};

export default {
  Locator,
};
