import TopPage from "@/app/page";
import { render } from "@testing-library/react";

describe("テスト・TopPage", () => {
  test("初期表示", async () => {
    const { asFragment, getByRole } = render(<TopPage />);

    expect(getByRole("heading", { level: 1 }).innerHTML).toBe("Next-Todo");

    expect(asFragment()).toMatchSnapshot();
  });
});
