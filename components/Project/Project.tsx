"use client";

import { IProject } from "@/models";
import Link from "next/link";
import { ArrowSquareOut } from "phosphor-react";

const Project = ({ project }: { project: IProject }) => {
  const { code, site, name, desc, tags } = project;
  return (
    <tr className="border-b dark:border-none odd:bg-slate-100 dark:odd:bg-neutral-900">
      <td className="px-2">
        <Link
          href={code}
          title={`${name}'s code`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 dark:text-blue-400 visited:text-purple-600 dark:visited:text-purple-400 mb-0.5 font-semibold"
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
