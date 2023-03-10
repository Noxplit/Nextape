import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovie } from '../../redux/slice/movieSlice'
import { getId } from '../../redux/slice/movieSlice'
import Banner from './Banner'
import { Audio } from 'react-loader-spinner'
import {MdCancelPresentation} from 'react-icons/md'
import Arrey from './Arrey'

const styleRating = {
	rating: 'flex gap-2 justify-center items-center',
}

const Main = () => {
	const dispatch = useDispatch()
	const { movies } = useSelector(state => state.movie)
	const { search } = useSelector(state => state.movie)
	const { genre } = useSelector(state => state.movie)
	// const { id } = useSelector(state => state.movie)


	const [count, setCount] = useState(1)
	const [loading, isLoading] = useState(false)

	const getMovies = async count => {
		isLoading(true)
		if (count > 0) {
			try {
				const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=21&page=${count}&query_term=${search.toLowerCase()}&genre=${genre}`)
				dispatch(getAllMovie(res.data))
				isLoading(false)
			} catch (error) {
				console.log(error)
			}
		}
		console.log('No')
	}

	useEffect(() => {
		getMovies(count)
	}, [count, search, genre])

	const handleId = id => {
		dispatch(getId(id))
	}

  const handleNextPage = () => {
    setCount(count + 1)
    window.scrollTo(0, 0)
  }
  const handlePerPage = () => {
    setCount(count - 1)
    window.scrollTo(0, 0)
  }
  


	return (
		<>
			{loading ? (
				<div className='flex dark:text-white text-black h-screen justify-center items-center gap-10 text-4xl font-bold'>
					<Audio
						height='100'
						width='100'
						color='purple'
						ariaLabel='audio-loading'
						wrapperStyle={{}}
						wrapperClass='wrapper-class'
						visible={true}
					/>
					Loading...
				</div>
			) : (movies?.data?.movies?.length ? <>
      <Arrey/>
					<Banner />
					<div className='flex flex-wrap justify-around items-center gap-5 dark:text-white text-black text-center'>
						{movies?.data?.movies?.map(item => (
							<div key={item.id}>
								<div
									className='relative flex items-center justify-center h-auto w-full shadow-lg rounded-xl py-8 p-4 group hover:bg-black/70  ease-in duration-500 cursor-pointer'
									onClick={() => handleId(item.id)}>
									<Image
										src={item?.large_cover_image}
										className='rounded-2xl group-hover:opacity-10  ease-in duration-300'
										placeholder='blur'
										blurDataURL={item?.large_cover_image}
										alt='movies'
										width={350}
										height={50}
									/>
									<div className='hidden  group-hover:block  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
										<div className='flex flex-col justify-center items-center gap-10'>
											<p className='py-2 text-xl font-bold text-white '>{item?.title_long}</p>
                      <div className='text-2xl font-bold flex flex-wrap justify-center items-center gap-5  text-gray-400'>{item?.genres.map((title,id)=> <div key={id}>{title}</div>)}</div>
											<div className='flex gap-5'>
												<div className={styleRating.rating}>
													<Image src='/imdb_logo.svg' width={40} height={25} />
													<div className='text-2xl font-bold text-white'>{item?.rating}</div>
												</div>

												<div className={styleRating.rating}>
													<Image src='/flag_icon.svg' width={40} height={25} />
													<div className='text-2xl font-bold text-white'>{item?.language}</div>
												</div>
											</div>
                      <Link href='/discription'><button className='rounded-xl bg-purple-400 text-white px-10 py-2 font-bold' >More info</button></Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='dark:text-white text-black flex justify-center items-center gap-10 pb-10 pt-5 '>
						<button
							className='bg-black dark:bg-white text-white dark:text-black px-10 py-2 rounded-2xl hover:scale-105 ease-in duration-300'
							onClick={handlePerPage}>
							Prev
						</button>
						<button
							className='bg-black dark:bg-white text-white dark:text-black px-10 py-2 rounded-2xl hover:scale-105 ease-in duration-300'
							onClick={handleNextPage}>
							Next
						</button>
					</div>
				</> : <div className='flex justify-center items-center text-center text-6xl font-bold gap-4 dark:text-white text-black  h-[85vh]'><MdCancelPresentation size={50}/>Films Not Found</div>)}
		</>
	)
}

export default Main
