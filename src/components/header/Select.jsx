import React from 'react'
import { useDispatch } from 'react-redux'
import { setGenre } from '../../redux/slice/movieSlice'

const styleButton = {
  button: 'bg-purple-400 rounded-md px-2 text-white font-bold'
}

const Select = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center flex-wrap items-center gap-4 dark:text-white text-black mt-2'>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('all'))}>ALL</button>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('comedy'))}>COMEDY</button>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('sci-fi'))}>SCI-FI</button>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('horror'))}>HORROR</button>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('romance'))}>ROMANCE</button>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('action'))}>ACTION</button>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('triller'))}>THRILLER</button>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('drama'))}>DRAMA</button>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('mystery'))}>MYSTERY</button>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('animation'))}>ANIMATION</button>
   <button className={styleButton.button} onClick={() => dispatch(setGenre('adventure'))}>ADVENTURE</button>
    </div>
  )
}

export default Select