import { ABOUT_TEXT } from "../constants"
import { motion } from "motion/react"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:px-10'>
      <h1 className='my-10 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
      <div className='flex flex-wrap items-center'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <motion.img 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{ duration: 0.5}}
            className="rounded-2xl w-80 opacity-70" src="https://res.cloudinary.com/dds4wowea/image/upload/v1736659590/20250112_104818_qfyhbx.jpg" alt="" />
          </div>
        </div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: 100}}
        transition={{ duration: 0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl text-justify py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
