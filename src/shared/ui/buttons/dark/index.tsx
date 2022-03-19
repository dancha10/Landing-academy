import { FC } from 'react'

import { Types } from 'shared/lib'

import { ReactComponent as Addition } from './addtion.svg'

import './style.scss'

interface IButtonDark extends Types.IButtonProps {
	addition?: boolean
}

export const Dark: FC<IButtonDark> = ({
	type = 'button',
	disabled = false,
	onClickHandler,
	addition = false,
	children,
}) => {
	return (
		<button type={type} className='btn btn--dark' onClick={onClickHandler} disabled={disabled}>
			{addition && <Addition />}
			{children}
		</button>
	)
}
