import { UserCard } from 'entities/user-card'
import { Avatar } from 'shared/ui/avatar'

import Nyasha from '../lib/nyasha.jpg'

import './style.scss'

export const UserPreview = () => {
	return (
		<div className='preview'>
			<Avatar image={Nyasha} />
			<div className='preview__card'>
				<UserCard
					fullName='Яна Валиева'
					yearBirth='10.08.2001'
					city='Томск'
					sex='female'
					pets
					description='Всем привет! Меня зовут Яна, мне 22 года, я студент. Учусь на программиста, но хочу стать продуктовым аналитиком. Недавно, например, я начала проходить курс на известной платформе, который поможет мне устроиться на работу моей мечты!'
				/>
			</div>
		</div>
	)
}
