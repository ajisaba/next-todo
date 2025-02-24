import HomePage from "@/app/page";
import { render } from "@testing-library/react";

describe("テスト・HomePage", () => {
  test("初期表示", async () => {
    const { asFragment, getByRole } = render(<HomePage />);

    expect(getByRole("heading", { level: 1 }).innerHTML).toBe("Next-Todo");

    expect(asFragment()).toMatchSnapshot();
  });
});
