import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-8'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJavascript className='text-5xl text-yellow-300'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact className='text-5xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-5xl text-lime-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-5xl text-sky-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNextjsLine className='text-5xl text-white'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiFirebaseFill className='text-5xl text-yellow-500'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
