import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovie } from '../../redux/slice/movieSlice'
import { getId } from '../../redux/slice/movieSlice'
import Banner from './Banner'
import { Audio } from 'react-loader-spinner'

const Main = () => {

  const dispatch = useDispatch()
	const { movies } = useSelector(state => state.movie)
	// const { id } = useSelector(state => state.movie)

  const [count, setCount] = useState(1)
  const [loading, isLoading] = useState(false)

  const getMovies = async(count) => {
    isLoading(true)
    if(count > 0){
      try {
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=21&page=${count}`)
      dispatch(getAllMovie(res.data))
      isLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    console.log('No');
  
    
  }


  useEffect(() => {
    getMovies(count)
  }, [count])

  const handleId = (id) => {
dispatch(getId(id))
  }
  
  return (
    <>
    {loading ? <div className='flex dark:text-white text-black h-screen justify-center items-center gap-10 text-4xl font-bold'><Audio
  height="100"
  width="100"
  color="purple"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
/>Loading...</div>: <> 
    <Banner/>
    <div className='flex flex-wrap justify-around items-center gap-5 dark:text-white text-black text-center'>
      {movies?.data?.movies?.map(item => (
<Link href='/discription' key={item.id}>
  <div  className='max-w-[350px]' onClick={() => handleId(item.id)}>
        <Image src={item?.large_cover_image !== undefined ? item?.large_cover_image : '/image_processing20220108-5384-o0vyk5.png' } className='rounded-2xl hover:scale-105 ease-in duration-300' placeholder='blur' blurDataURL={item?.large_cover_image}  alt='movies' width={350} height={50} />
        <p className='py-2 text-xl font-bold'>{item?.title_long}</p>
        </div>
        </Link>
      ))}
    </div>
     <div className='dark:text-white text-black flex justify-center items-center gap-10 pb-10 pt-5 '>
     <button className='bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-2xl hover:scale-105 ease-in duration-300' onClick={() => setCount(count - 1)}>Prev</button>
     <button className='bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-2xl hover:scale-105 ease-in duration-300' onClick={() => setCount(count + 1)}>Next</button>
   </div></>  }
   
   </>
  )
}

export default Main