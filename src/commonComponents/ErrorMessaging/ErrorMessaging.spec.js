import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import ErrorMessaging from "./ErrorMessaging";

describe("Error Component", () => {
  it("should render Error Component", () => {
    const component = shallow(<ErrorMessaging error="0 results" />);
    expect(component.getElements()).toMatchSnapshot();
  });
  it("should check if null is passed in text and element shoud not render", () => {
    render(<ErrorMessaging text="" />);
    const buttontxt = screen.queryByText('0 results');
    expect(buttontxt).toBeNull();
  });
  it("should have text passed as props to the component", () => {
    const { getByText } = render(<ErrorMessaging text="0 results" />);
    expect(getByText("0 results")).toBeDefined();
  });
});
