import React from 'react'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex justify-center items-center gap-4 dark:bg-[#17171b] dark:text-white bg-white text-black'>
    <div className='text-center text-2xl font-bold p-4 '>Created by Noxplit</div>
    <div><AiFillGithub size={30}/></div>
    </div>
  )
}

export default Footer