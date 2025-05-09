import { PROJECTS } from "../constants";
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap items-center lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                whileInView={{ opacity: 1,x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <motion.div 
            whileInView={{ opacity: 1,x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1.5}}
            className="w-full max-w-xl lg:w-3/4">
              <div className="flex justify-between items-center">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
            </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-[#615ae5]"
                >
                  {tech}
                </span>
              ))}
              <a className="mr-2 rounded bg-neutral-900 ml-2 px-2 py-1 text-sm font-medium text-sky-500 hover:text-sky-700" href={project.link}>LINK</a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;