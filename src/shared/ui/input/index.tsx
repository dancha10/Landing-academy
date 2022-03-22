import { FC } from 'react'
import classList from 'classnames'

import { Types } from 'shared/lib'

import './style.scss'

export const Input: FC<Types.IInput> = ({ placeholder, disabled, validator, isError }) => {
	return (
		<input
			{...validator}
			type='text'
			placeholder={placeholder}
			className={classList('input', { 'input--error': isError })}
			disabled={disabled}
		/>
	)
}
