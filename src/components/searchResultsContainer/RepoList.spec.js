import { shallow } from "enzyme";
import { render, fireEvent  } from "@testing-library/react";
import ReposList from "./ReposList";

describe("ReposList Component", () => {
    const Props = {
        list: [
            {
                node :{
                    languages: {
                        nodes: [
                          {
                            name: "JavaScript",
                          },
                          {
                            name: "CSS",
                          }
                        ],
                      },
                      name: "react",
                      url: "https://github.com/typescript-cheatsheets/react",
                      description: "Cheatsheets for experienced React developers getting started with TypeScript",
                      stargazerCount: 21954,
                      updatedAt: "2021-02-18T02:44:13Z",
                      openGraphImageUrl: "https://repository-images.githubusercontent.com/135786093/b56ad700-6d50-11e9-9775-9f64c1e1414e",
                    owner: {
                        avatarUrl: 'https://avatars.githubusercontent.com/u/50188264?v=4',
                        login: 'typescript-cheatsheets'
                        }
                }
            },
        ]
    }
  it("should render ReposList Component", () => {
    const component = shallow(<ReposList list={Props.list}/>);
    expect(component.getElements()).toMatchSnapshot();
  });
  it("should have className repo-section to load the ReposList component with proper styling", () => {
    const { container } = render(<ReposList list={Props.list}/>);
    expect(container.firstChild.classList.contains('repo-section')).toBe(true)
  });
});
