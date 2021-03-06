import { FC } from 'react'

import { IAvatar } from 'shared/ui/avatar'
import { UserViewer } from 'shared/ui/user-viewer'

import './style.scss'

interface IUserComment extends IAvatar {
	review: string
	name: string
	dateOfPost: string
}

export const UserComment: FC<IUserComment> = ({ image, review, name, dateOfPost }) => {
	return (
		<div className='user-comment'>
			<div className='user-comment__header'>
				<UserViewer fullName={name} image={image} />
				<div className='user-comment__year'>{dateOfPost}</div>
			</div>
			<p className='user-comment__review'>{review}</p>
		</div>
	)
}
