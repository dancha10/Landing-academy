import { FC } from 'react'
import { useStore } from 'effector-react'

import { UserViewer } from 'shared/ui/user-viewer'
import { Button } from 'shared/ui/buttons'
import { $isMobileWidth } from 'shared/lib'

import Nyasha from '../lib/nyasha2.jpg'
import { ReactComponent as Logo } from '../lib/logo.svg'
import { ReactComponent as MobileProfile } from '../lib/profile.svg'

import './style.scss'

export const Header: FC = () => {
	const isMobileWidth = useStore($isMobileWidth)
	return (
		<header className='header'>
			<div className='header__container container'>
				<UserViewer fullName='Яна Валиева' image={Nyasha} isMobileWidth={isMobileWidth} />
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
