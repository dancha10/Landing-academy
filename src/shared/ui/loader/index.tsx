import { FC } from 'react'

import './style.scss'

export const Loader: FC = () => {
	return (
		<div className='loader'>
			<i className='loader__dot' />
			<i className='loader__dot' />
			<i className='loader__dot' />
			<i className='loader__dot' />
			<i className='loader__dot' />
			<i className='loader__dot' />
			<i className='loader__dot' />
			<i className='loader__dot' />
		</div>
	)
}
