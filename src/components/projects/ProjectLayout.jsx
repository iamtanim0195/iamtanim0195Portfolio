import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({ name, description, createdAt, url, liveLink, CodeLink }) => {

  // Ensure the URL is a fully qualified URL
  const fullLiveUrl = `${url || liveLink}`;
  const fullCodeUrl = CodeLink;

  return (
    <motion.a
      variants={item}
      className="text-sm md:text-base flex  flex-col w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex ">
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground">{name}</h2>
          <p className="text-muted hidden sm:inline-block">{description}</p>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-muted sm:text-foreground">
          {new Date(createdAt).toDateString()}
        </p>
      </div>
      <div className="flex p-1 gap-2 ">
        <motion.a
          variants={item}
          href={fullLiveUrl} // Use the actual URL
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security measure
          className="rounded-lg custom-bg p-1 cursor-pointer">
          Live Link
        </motion.a>
        <motion.a
          variants={item}
          href={fullCodeUrl} // Use the actual URL
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security measure
          className="rounded-lg custom-bg p-1 cursor-pointer">
          GitHub Repo
        </motion.a>
      </div>
    </motion.a>
  );
};

export default ProjectLayout;
