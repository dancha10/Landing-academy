import { FC, useState } from 'react'
import classNames from 'classnames'

import './style.scss'

interface IInput {
	placeholder: string
	disabled?: boolean
	validator?: Object
}

export const Input: FC<IInput> = ({ placeholder, disabled, validator }) => {
	const [isActive, setActive] = useState(false)
	const changedActive = (value: string) => (value ? setActive(true) : setActive(false))
	return (
		<input
			{...validator}
			type='text'
			placeholder={placeholder}
			className={classNames('input', { 'input--active': isActive })}
			onChange={event => changedActive(event.target.value)}
			disabled={disabled}
		/>
	)
}
