import React, { useEffect } from 'react'
import axios from 'axios';
import { getBanner, getId } from '../../redux/slice/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

const styleRating = {
  rating:'flex gap-2 justify-center items-center' 
}

const Banner = () => {

  const dispatch = useDispatch()
  const {banner} = useSelector(state => state.movie)
const bannerUrl = banner?.data?.movie


  function randomeId(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  const getBannerMovie = async() => {
      try {
        const res = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${randomeId(1,1000)}`)
        dispatch(getBanner(res?.data))
      } catch (error) {
        console.log(error);
      }
  }

  const getBannerId = (id) => {
dispatch(getId(id))
  }
 
  useEffect(() => {
    getBannerMovie()
  }, [])


  return (
    <div className='flex justify-center items-center px-5 pb-10'>
    <div className='absolute  w-[95%]  h-full max-h-[700px] text-center  text-gray-200  bg-black/70 flex flex-col rounded-2xl gap-5  justify-center items-center'>
<div className='text-4xl font-bold max-w-[600px] '>{bannerUrl?.title_long}</div>
<div className='text-2xl font-bold flex flex-wrap justify-center items-center gap-5  text-gray-400'>{bannerUrl?.genres.map((title,id)=> <div key={id}>{title}</div>)}</div>
<div className='flex gap-5'>
  <div className={styleRating.rating}>
<Image src='/imdb_logo.svg' width={40} height={25}/>
<div className='text-2xl font-bold'>{bannerUrl?.rating}</div>
</div>

<div className={styleRating.rating}>
<Image src='/flag_icon.svg' width={40} height={25}/>
<div className='text-2xl font-bold'>{bannerUrl?.language}</div>
</div>

<div className={styleRating.rating}>
<Image src='/age_rating.png' width={40} height={25}/>
<div className='text-2xl font-bold'>{bannerUrl?.mpa_rating}</div>
</div>
</div>

<Link href='/discription'><button onClick={() => getBannerId(bannerUrl.id)} className='rounded-xl bg-purple-400 text-white px-20 py-2 font-bold' >More info</button></Link>
    </div>
<Image src={bannerUrl?.large_cover_image} className='rounded-2xl hover:scale-105 '  alt='movies' width={500} height={50} style={{width:'95%', height:'700px', objectFit:'cover', objectPosition:'top'}} />
    </div>
  )
}

export default Banner