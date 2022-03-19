import { FC } from 'react'
import classList from 'classnames'

import './style.scss'

interface ISliderDot {
	isActive: boolean
}

export const SliderDot: FC<ISliderDot> = ({ isActive }) => {
	return <span className={classList('slider-dot', { 'slider-dot--active': isActive })} />
}
