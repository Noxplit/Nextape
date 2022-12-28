import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOneMovie } from '../../src/redux/slice/movieSlice'
import axios from 'axios'
import Image from 'next/image'
import { Audio } from 'react-loader-spinner'
import { AiFillLike, AiOutlineCloudDownload } from 'react-icons/ai'

const styleRating = {
	rating: 'flex gap-2 justify-center items-center',
}

const Discription = () => {
	const dispatch = useDispatch()
	const { id } = useSelector(state => state.movie)
	const { movie } = useSelector(state => state.movie)
	const [loading, isLoading] = useState(false)

	const getMovie = async () => {
		isLoading(true)
		try {
			const res = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
			dispatch(getOneMovie(res.data))
			isLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getMovie()
	}, [])

	const movieItem = movie?.data?.movie

	return (
		<div className='dark:bg-[#17171b] dark:text-white'>
			{loading ? (
				<div className='flex h-screen justify-center items-center gap-10 text-4xl font-bold'>
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
			) : (
				<div className='flex justify-center items-center flex-col gap-5 p-4'>
					<div className='flex  lg:flex-nowrap flex-wrap justify-center items-center     gap-5'>
						<Image
							src={movieItem?.large_cover_image}
							width={900}
							height={100}
							className='rounded-2xl h-auto'
						/>
						<iframe
							src={`https://www.youtube.com/embed/${movieItem?.yt_trailer_code}`}
							className='w-full h-[765px] object-cover rounded-2xl'
						/>
					</div>

					<div className='flex flex-col  justify-center  items-center gap-5'>
						<p className='font-bold'>{movieItem?.title_long}</p>
						<p className='flex gap-5 font-bold'>
							{movieItem?.genres.map((item, id) => (
								<div key={id}>{item}</div>
							))}
						</p>
						<div className='flex gap-5 justify-center items-center flex-wrap'>
							<div className={styleRating.rating}>
								<Image src='/imdb_logo.svg' width={40} height={25} />
								<div className='text-2xl font-bold'>{movieItem?.rating}</div>
							</div>

							<div className={styleRating.rating}>
								<Image src='/flag_icon.svg' width={40} height={25} />
								<div className='text-2xl font-bold'>{movieItem?.language}</div>
							</div>

							<div className={styleRating.rating}>
								<Image src='/age_rating.png' width={40} height={25} />
								<div className='text-2xl font-bold'>{movieItem?.mpa_rating}</div>
							</div>
							<div className='flex justify-center items-center gap-2 font-bold text-xl'>
								<AiOutlineCloudDownload size={25} />
								{movieItem?.download_count}
							</div>
							<div className='flex justify-center items-center gap-2 font-bold text-xl'>
								<AiFillLike size={25} />
								{movieItem?.like_count}
							</div>
						</div>

						<p>{movieItem?.description_full}</p>
						<div className='flex gap-10 flex-wrap justify-center items-center'>
							<a
								className='dark:bg-white dark:text-black bg-purple-400 text-white rounded-lg p-4 w-[200px] text-center '
								href={movieItem?.url}>
								<button>Watch Now</button>
							</a>
							<a
								className='dark:bg-white dark:text-black bg-purple-400 text-white rounded-lg p-4 w-[200px] text-center '
								href={movieItem?.url}>
								<button>Download</button>
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Discription
