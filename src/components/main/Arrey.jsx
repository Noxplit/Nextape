import React from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const Arrey = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div  className='fixed bottom-10 right-5 z-20 cursor-pointer hover:scale-105 ease-in duration-300'><BsFillArrowUpCircleFill onClick={handleScroll}  className='text-purple-400' size={50}/></div>
  )
}

export default Arrey