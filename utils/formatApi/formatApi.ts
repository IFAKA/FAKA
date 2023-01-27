import { IProject, Repo } from "@/models";
import { sentenceCase } from "../sentenceCase";

const formatApi = (apiRes: Repo[]): IProject[] =>
  apiRes?.map((repo) => ({
    id: repo.id,
    code: repo.html_url ?? "",
    site: repo.homepage ?? "",
    name: sentenceCase(repo.name).replace(/-/g, " "),
    desc: repo.description ?? "",
    tags: repo.topics.join(", "),
  }));

export default formatApi;
