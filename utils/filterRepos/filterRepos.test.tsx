import "@testing-library/jest-dom"
import filterRepos from "./filterRepos"

const repos = [
  {
    id: 0,
    href: "www.internet.com",
    name: "Title",
    desc: "Description",
    tags: ["tag"],
  },
  {
    id: 1,
    href: "www.internet.com",
    name: "Title",
    desc: "",
    tags: ["tag"],
  },
  {
    id: 2,
    href: "www.internet.com",
    name: "Title",
    desc: "Description",
    tags: [],
  },
  {
    id: 3,
    href: "www.internet.com",
    name: "Title",
    desc: "",
    tags: [],
  },
]

const potableRepos = [
  {
    id: 0,
    href: "www.internet.com",
    name: "Title",
    desc: "Description",
    tags: ["tag"],
  },
]

describe("filterRepos", () => {
  it("filters repos", async () => {
    const filteredRepos = filterRepos(repos)
    expect(filteredRepos).toEqual(potableRepos)
  })
})
