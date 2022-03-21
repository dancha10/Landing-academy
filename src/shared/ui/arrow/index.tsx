import { FC } from 'react'

import { ReactComponent as Arrow } from './arrow.svg'

import './style.scss'

interface IArrowSlider {
	rotate?: number
	disabled?: boolean
	onClick: () => void
}

export const ArrowSlider: FC<IArrowSlider> = ({ rotate, onClick, disabled = false }) => {
	return (
		<button
			className='arrow'
			style={{ transform: `rotate(${rotate}deg)` }}
			disabled={disabled}
			onClick={onClick}
		>
			<Arrow />
		</button>
	)
}
