import { ABOUT_TEXT } from "../constants"
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:px-10'>
      <h1 className='my-10 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
      <div className='flex flex-wrap items-center'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className="rounded-2xl w-80 opacity-70" src="https://res.cloudinary.com/dds4wowea/image/upload/v1736659590/20250112_104818_qfyhbx.jpg" alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
