import { FC, useState } from 'react'
import classList from 'classnames'

import './style.scss'

interface ITextarea {
	placeholder: string
	maxLength: number
	validator?: Object
}

export const Textarea: FC<ITextarea> = ({ placeholder, maxLength, validator }) => {
	const [isActive, setActive] = useState(false)
	const [currentLength, setCurrentLength] = useState<number>(0)

	const changedActive = (value: string): void => (value ? setActive(true) : setActive(false))

	const changeValue = (value: string): void => {
		setCurrentLength(value.length)
		changedActive(value)
	}

	return (
		<div className={classList('textarea', { 'textarea--active': isActive })}>
			<textarea
				{...validator}
				placeholder={placeholder}
				onChange={e => changeValue(e.target.value)}
				maxLength={maxLength}
			/>

			<p className='textarea__counter'>
				{currentLength}/{maxLength}
			</p>
		</div>
	)
}
