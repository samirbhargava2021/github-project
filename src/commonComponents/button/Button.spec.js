import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("ButtonComponent", () => {
  const mockCallBack = jest.fn();
  const props = {
    events: mockCallBack,
    data:{
      theme:"light",
      text:"Search"
    },
    options:{
        buttonSize:"small"
    }
  }
  it("should render Button Component", () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have text passed for Button", () => {
    render(<Button {...props} />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it("should handle Button click event", () => {
    const button = shallow(<Button {...props} />);
    button.find("button").simulate("click");
    expect(mockCallBack).toHaveBeenCalled();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
