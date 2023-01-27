import "@testing-library/jest-dom"
import sentenceCase from "./sentenceCase"

describe("formatApi", () => {
  it("format repos", async () => {
    const formatedRepos = sentenceCase("text")
    expect(formatedRepos).toEqual("Text")
    expect(formatedRepos).not.toEqual("text")
  })
})
