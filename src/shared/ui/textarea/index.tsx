import { FC, useState } from 'react'

import './style.scss'

interface ITextarea {
	placeholder: string
	maxLength: number
	validator?: Object
}

export const Textarea: FC<ITextarea> = ({ placeholder, maxLength, validator }) => {
	const [currentLength, setCurrentLength] = useState<number>(0)

	const changeValue = (value: string): void => setCurrentLength(value.length)

	return (
		<div className='textarea'>
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
