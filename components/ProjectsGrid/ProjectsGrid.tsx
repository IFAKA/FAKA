import { IProject } from "@/models";
import { ProjectStylish } from "../ProjectStylish";

const ProjectsGrid = ({ projects }: { projects: IProject[] }) => {
  return (
    <div className="grid w-full max-w-5xl gap-4 px-2 sm:grid-cols-3">
      {projects?.map((project, i) => (
        <ProjectStylish project={project} key={project.id} i={i} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
