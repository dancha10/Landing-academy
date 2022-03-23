import { FC } from 'react'
import { useStore } from 'effector-react'

import { UserViewer } from 'shared/ui/user-viewer'
import { Button } from 'shared/ui/buttons'
import { $isMobileWidth } from 'shared/lib'

import { ReactComponent as Logo } from '../lib/logo.svg'
import { ReactComponent as MobileProfile } from '../lib/profile.svg'

import './style.scss'

export const Header: FC = () => {
	const isMobileWidth = useStore($isMobileWidth)
	return (
		<header className='header'>
			<div className='header__container container'>
				<UserViewer
					fullName='Даниил Абраменко'
					image='https://sun9-36.userapi.com/impf/c849332/v849332182/d8a7e/SzEtiqLuErs.jpg?size=960x1280&quality=96&sign=4ae6bc474b03e1683da4b35cf31ac851&type=album'
					isMobileWidth={isMobileWidth}
				/>
				<a
					href='https://ilink.dev/promo/academy.html'
					target='_blank'
					className='header__logo'
					rel='noreferrer'
				>
					<Logo />
				</a>
				<Button.Dark onClickHandler={() => {}}>
					{isMobileWidth ? <MobileProfile /> : 'Панель управления'}
				</Button.Dark>
			</div>
		</header>
	)
}
