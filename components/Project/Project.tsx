"use client";

import { IProject } from "@/models";
import Link from "next/link";
import { ArrowSquareOut } from "phosphor-react";

const Project = ({ project }: { project: IProject }) => {
  const { code, site, name, desc, tags } = project;
  return (
    <tr className="border-b shadow dark:border-neutral-800">
      <td className="px-2">
        <Link
          href={code}
          title={`${name}'s code`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 visited:text-purple-600 mb-0.5 font-semibold"
        >
          {name}
        </Link>
      </td>
      <td className="px-2">{desc}</td>
      <td className="px-2">{tags}</td>
      <td className="px-2">
        {site && (
          <Link
            href={site}
            title={`${name}'s site`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center w-full"
          >
            <ArrowSquareOut size={16} />
          </Link>
        )}
      </td>
    </tr>
  );
};
export default Project;
