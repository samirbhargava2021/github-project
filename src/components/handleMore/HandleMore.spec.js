import { shallow } from "enzyme";
import HandleMore from "./HandleMore";

describe("HandleMore Component", () => {
  it("should render HandleMore Component", () => {
    const component = shallow(<HandleMore />);
    expect(component.getElements()).toMatchSnapshot();
  });

});
