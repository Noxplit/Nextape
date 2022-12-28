import { useSelector } from 'react-redux'
import Main from '../src/components/main/Main'

export default function Home() {
	const { mode } = useSelector(state => state.mode)

	return (
		<div className={mode ? 'dark' : ''}>
			<div className='dark:bg-[#17171b] bg-white  h-full'>
				<Main />
			</div>
		</div>
	)
}
