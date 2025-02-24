import { Page } from "@playwright/test";

const Locator = {
  header: (page: Page, row: number) =>
    page.locator(`table > tbody > tr:nth-child(${row}) > th:nth-child(1)`),
  value: (page: Page, row: number) =>
    page.locator(`table > tbody > tr:nth-child(${row}) > td:nth-child(1)`),
};

export default {
  Locator,
};
