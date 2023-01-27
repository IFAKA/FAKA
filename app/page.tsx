import { Footer, Project } from "@/components";
import { Inter } from "@next/font/google";
import { getRepos } from "./services";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const projects = await getRepos();
  return (
    <main className={`${inter.className} w-full grid place-content-center`}>
      <div className="max-w-5xl">
        <header className="w-full text-center">
          <h1 className="my-2 text-xl font-bold leading-4">FAKA</h1>
        </header>

        <table className="border rounded shadow">
          <thead>
            <tr className="text-sm">
              <th className="px-2 py-1">Name</th>
              <th className="px-2">Description</th>
              <th className="px-2">Techonolgies</th>
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
