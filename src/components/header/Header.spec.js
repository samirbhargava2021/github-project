import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("HeaderComponent", () => {
  it("should render Header Component", () => {
    const component = shallow(<Header />);
    expect(component.getElements()).toMatchSnapshot();
  });
  it("should have className header to load the header with proper styling", () => {
    const { container } = render(<Header />);
    expect(container.firstChild.classList.contains('header')).toBe(true)
  });
  it("should have text 'Search Repos'", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Search Repos")).toBeDefined();
  });
});
