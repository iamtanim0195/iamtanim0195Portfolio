"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  console.log("Projects received:", projects); // Log projects array

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projects && projects.length > 0 ? ( // Check if projects exist
        projects.map((project, index) => {
          console.log("Project data:", project); // Log each project
          return <ProjectLayout key={index} {...project} />;
        })
      ) : (
        <p>No projects available.</p> // Provide feedback if no projects
      )}
    </motion.div>
  );
};

export default ProjectList;
