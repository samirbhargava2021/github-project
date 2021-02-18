import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner Component", () => {
  it("should render spinner Component", () => {
    const component = shallow(<Spinner />);
    expect(component.getElements()).toMatchSnapshot();
  });
  it("should have className spinner to load the spinner with proper styling", () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild.firstChild.classList.contains('spinner')).toBe(true)
  });
  it("should have text 'Loading.....' in the component", () => {
    const { getByText } = render(<Spinner />);
    expect(getByText("Loading.....")).toBeDefined();
  });
  it("should have text 'Loading.....' in the component", () => {
    const { getByText } = render(<Spinner />);
    expect(getByText("Loading.....")).toBeDefined();
  });
});
