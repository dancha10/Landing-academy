import { FC } from 'react'

import { ReactComponent as Arrow } from './arrow.svg'

import './style.scss'

interface IArrowSlider {
	rotate?: number
	disabled?: boolean
}

export const ArrowSlider: FC<IArrowSlider> = ({ rotate, disabled = false }) => {
	return (
		<button className='arrow' style={{ transform: `rotate(${rotate}deg)` }} disabled={disabled}>
			<Arrow />
		</button>
	)
}
