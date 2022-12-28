import React from 'react'
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai'
import { BiMenuAltLeft } from 'react-icons/bi'
import { RxAvatar } from 'react-icons/rx'
import { BiCameraMovie } from 'react-icons/bi'
import { switchMode } from '../../redux/slice/drakmodeSlice'
import { useSelector, useDispatch } from 'react-redux'
import Switch from 'react-switch'
import { getId } from '../../redux/slice/movieSlice'
import Link from 'next/link'

const Header = () => {
	const dispatch = useDispatch()
	const { mode } = useSelector(state => state.mode)
	return (
		// Лого
    <div className='p-4  dark:bg-[#17171b] bg-white'>
		<div className='pb-4  flex flex-wrap justify-around sm:justify-between items-center dark:text-white text-black'>
			<div className='flex justify-center  items-center gap-5'>
				<Link href='/'><p  className='text-2xl font-bold uppercase '>NexTape</p></Link>
				<BiCameraMovie size={25} />
			</div>

			{/* Категории */}
			<ul className='hidden lg:flex gap-20'>
				<li>Movies</li>
				<li>TV Show</li>
				<li>Animations</li>
				<li>Plans</li>
			</ul>

			{/* Иконки */}
			<ul className='flex justify-center items-center gap-5 md:gap-10'>
				<li>
					<AiOutlineSearch size={25} />
				</li>
				<li>
					<BiMenuAltLeft size={25} />
				</li>
				<li>
					<AiOutlineBell size={25} />
				</li>
				<li>
					<RxAvatar size={25} />
				</li>
				<li>
					<Switch
						checkedIcon={false}
						uncheckedIcon={false}
						onColor='white'
						onChange={() => dispatch(switchMode(!mode))}
						checked={mode}
					/>
				</li>
			</ul>
		</div>
    </div>
	)
}

export default Header
