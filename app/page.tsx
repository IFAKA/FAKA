import { Footer, Project } from "@/components";
import { IProject } from "@/models";
import { filterRepos, formatApi } from "@/utils";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const getRepos = async (): Promise<IProject[]> => {
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

export default async function Home() {
  const projects = await getRepos();
  return (
    <main className={`${inter.className} w-full grid place-content-center`}>
      <div className="max-w-5xl">
        <h1 className="w-full px-2 pt-4 pb-2 text-xl font-bold text-center">
          FAKA
        </h1>

        <table>
          <thead>
            <tr>
              <th className="px-2">Name</th>
              <th className="px-2">Description</th>
              <th className="px-2">Techonolgies</th>
              <th className="px-2">Code</th>
              <th className="px-2">Site</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </tbody>
        </table>

        <Footer />
      </div>
    </main>
  );
}
