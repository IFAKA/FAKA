import { IProject } from "@/models";
import Project from "../Project/Project";

const ProjectsTable = ({ projects }: { projects: IProject[] }) => {
  return (
    <table className="w-full max-w-5xl border rounded shadow dark:border-neutral-800">
      <thead>
        <tr>
          <th className="px-2 py-1 text-sm">Name</th>
          <th className="px-2 py-1 text-sm">Description</th>
          <th className="px-2 py-1 text-sm">Techonolgies</th>
          <th className="px-2 py-1 text-sm">Site</th>
        </tr>
      </thead>
      <tbody>
        {projects?.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
