/* eslint-disable camelcase */
import { Repo } from "@/models"
import "@testing-library/jest-dom"
import formatApi from "./formatApi"

const License = {
  key: "",
  name: "",
  spdx_id: "",
  url: "",
  node_id: "",
}

const Owner = {
  login: "",
  id: 0,
  node_id: "",
  avatar_url: "",
  gravatar_id: "",
  url: "",
  html_url: "",
  followers_url: "",
  following_url: "",
  gists_url: "",
  starred_url: "",
  subscriptions_url: "",
  organizations_url: "",
  repos_url: "",
  events_url: "",
  received_events_url: "",
  type: "",
  site_admin: false,
}

const repo: Repo = {
  id: 0,
  node_id: "",
  name: "Title",
  full_name: "",
  private: false,
  owner: Owner,
  html_url: "",
  description: "Description",
  fork: false,
  url: "",
  forks_url: "",
  keys_url: "",
  collaborators_url: "",
  teams_url: "",
  hooks_url: "",
  issue_events_url: "",
  events_url: "",
  assignees_url: "",
  branches_url: "",
  tags_url: "",
  blobs_url: "",
  git_tags_url: "",
  git_refs_url: "",
  trees_url: "",
  statuses_url: "",
  languages_url: "",
  stargazers_url: "",
  contributors_url: "",
  subscribers_url: "",
  subscription_url: "",
  commits_url: "",
  git_commits_url: "",
  comments_url: "",
  issue_comment_url: "",
  contents_url: "",
  compare_url: "",
  merges_url: "",
  archive_url: "",
  downloads_url: "",
  issues_url: "",
  pulls_url: "",
  milestones_url: "",
  notifications_url: "",
  labels_url: "",
  releases_url: "",
  deployments_url: "",
  created_at: "",
  updated_at: "",
  pushed_at: "",
  git_url: "",
  ssh_url: "",
  clone_url: "",
  svn_url: "",
  homepage: "www.internet.com",
  size: 0,
  stargazers_count: 0,
  watchers_count: 0,
  language: "",
  has_issues: false,
  has_projects: false,
  has_downloads: false,
  has_wiki: false,
  has_pages: false,
  has_discussions: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: License,
  allow_forking: false,
  is_template: false,
  web_commit_signoff_required: false,
  topics: ["tag"],
  visibility: "",
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: "",
}

const repos = [repo]

const potableRepos = [
  {
    id: 0,
    href: "www.internet.com",
    name: "Title",
    desc: "Description",
    tags: ["tag"],
  },
]

describe("formatApi", () => {
  it("format repos", async () => {
    const formatedRepos = formatApi(repos)
    expect(formatedRepos).toEqual(potableRepos)
  })
})
