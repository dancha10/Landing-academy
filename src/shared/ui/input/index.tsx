import { FC } from 'react'

import './style.scss'

interface IInput {
	placeholder: string
	disabled?: boolean
	validator?: Object
}

export const Input: FC<IInput> = ({ placeholder, disabled, validator }) => {
	return (
		<input
			{...validator}
			type='text'
			placeholder={placeholder}
			className='input'
			disabled={disabled}
		/>
	)
}
