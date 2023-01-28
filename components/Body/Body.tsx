"use client";

import { IProject } from "@/models";
import { isStyledAtom } from "@/store";
import { useAtom } from "jotai";
import { ClientOnly } from "../ClientOnly";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ProjectsGrid } from "../ProjectsGrid";
import { ProjectsTable } from "../ProjectsTable";

const Body = ({ projects }: { projects: IProject[] }) => {
  const [isStyled] = useAtom(isStyledAtom);
  return (
    <ClientOnly>
      <div className="flex flex-col items-center w-full">
        <Header />

        {isStyled ? (
          <ProjectsGrid projects={projects} />
        ) : (
          <ProjectsTable projects={projects} />
        )}

        <Footer />
      </div>
    </ClientOnly>
  );
};

export default Body;
