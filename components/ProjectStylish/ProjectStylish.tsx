"use client";

import { IProject } from "@/models";
import { motion } from "framer-motion";
import { ArrowSquareOut, Code, CodeSimple, GitBranch } from "phosphor-react";
import Tilt from "react-parallax-tilt";

const ProjectStylish = ({ project, i }: { project: IProject; i: number }) => {
  const { code, site, name, desc, tags } = project;
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={0.97}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="12px"
      perspective={500}
    >
      <motion.div
        className="flex flex-col justify-between h-full px-4 pt-3 pb-4 border shadow rounded-xl dark:border-none dark:bg-neutral-900"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          duration: 0.3,
          delay: Math.sqrt(i + 2) * 0.2,
        }}
      >
        <div>
          <div className="flex items-center justify-between mb-2 ">
            <h1 className="text-lg font-semibold">{name}</h1>
            <div className="flex">
              <motion.a
                aria-label={`Code of ${name}`}
                className="flex flex-col justify-between h-full p-3 border rounded-full shadow cursor-pointer dark:border-none hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  duration: 0.3,
                }}
                href={code}
                target="_blank"
                rel="noreferrer"
              >
                <CodeSimple size={16} />
              </motion.a>
              {site && (
                <motion.a
                  aria-label={`Website of ${name}`}
                  className="flex flex-col justify-between h-full p-3 ml-2 border rounded-full shadow cursor-pointer dark:border-none hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.3,
                  }}
                  href={site}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowSquareOut size={16} />
                </motion.a>
              )}
            </div>
          </div>
          <p role="paragraph" className="mb-5">
            {desc}
          </p>
        </div>
        <p>{tags}</p>
      </motion.div>
    </Tilt>
  );
};
export default ProjectStylish;
