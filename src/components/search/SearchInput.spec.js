import { shallow } from "enzyme";
import { render, fireEvent  } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SeachInput Component", () => {
    const setup = () => {
        const utils = render(<SearchInput onSearch='react'/>)
        const input = utils.getByLabelText('search')
        return {
          input,
          ...utils,
        }
    }
  it("should render Search Input Component", () => {
    const component = shallow(<SearchInput />);
    expect(component.getElements()).toMatchSnapshot();
  });
  it("should have className search-container to load the searchInput with proper styling", () => {
    const { container } = render(<SearchInput />);
    expect(container.firstChild.classList.contains('search-container')).toBe(true)
  });
  it('It should check if the input value changes', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'angular' } })
    expect(input.value).toBe('angular');
  });
});
