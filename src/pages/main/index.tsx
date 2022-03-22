import { FC } from 'react'
import { useGate } from 'effector-react'

import { ReviewModel } from 'widget/review-modal'
import { Header } from 'widget/header'
import { UserPreview } from 'widget/user-preview'
import { Footer } from 'widget/footer'
import { SliderReviews } from 'widget/slider-reviews'
import { NotificationWrapper } from 'entities/notification'
import { MainPageGate } from 'shared/lib'

import './style.scss'

const MainPage: FC = () => {
	useGate(MainPageGate)
	return (
		<div className='main-page'>
			<Header />
			<main className='main-page__container container'>
				<h1 className='main-page__welcome'>Добро пожаловать в академию!</h1>
				<div className='main-page__user-preview'>
					<UserPreview />
				</div>
			</main>
			<div className='main-page__reviews'>
				<SliderReviews />
			</div>
			<ReviewModel />
			<NotificationWrapper />
			<Footer />
		</div>
	)
}

export default MainPage
