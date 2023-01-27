import { IProject } from "@/models";
import { filterRepos, formatApi } from "@/utils";

export const getRepos = async (): Promise<IProject[]> => {
  const r = await fetch("https://api.github.com/users/IFAKA/repos", {
    headers: {
      Authorization: `${process.env.ACCESS_TOKEN}`,
    },
  });
  if (!r.ok) throw new Error("Error");
  const rawRepos = await r.json();
  const formatedRepos = formatApi(rawRepos);
  const filteredRepos = filterRepos(formatedRepos);
  return filteredRepos;
};
