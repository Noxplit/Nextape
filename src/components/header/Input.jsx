import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/slice/movieSlice'

const Input = () => {
  const dispatch = useDispatch()
  const [searchButton, setSearchButton] = useState('')
  const handleSearchButton = () => {
    dispatch(setSearch(searchButton))
  }
  return (
    <div className='flex justify-center items-center gap-4 flex-wrap'>
      <input value={searchButton} onChange={e => setSearchButton(e.target.value) } type="text" className='border-2 w-[1000px] border-gray-300 rounded-xl py-2 text-center' placeholder='Search...' />
      <button className=' rounded-xl py-2 px-6 bg-purple-400 text-white' onClick={handleSearchButton}>Search</button>
    </div>
  )
}

export default Input