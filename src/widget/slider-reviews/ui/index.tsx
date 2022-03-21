import { FC, useRef } from 'react'
import { useList } from 'effector-react'
import Slider from 'react-slick'

import { ToggleModel } from 'features/toggle-modal'
import { Button } from 'shared/ui/buttons'
import { UserComment } from 'shared/ui/user-comment'
import { ArrowSlider } from 'shared/ui/arrow'

import { $userReviews } from '../model'

import './style.scss'

export const SliderReviews: FC = () => {
	const sliderRef = useRef<any>(null)
	const UserReviewsList = useList($userReviews, ({ avatar, fullName, dateOfPost, review }) => (
		<UserComment review={review} name={fullName} dateOfPost={dateOfPost} image={avatar} />
	))
	const nextSlide = () => {
		sliderRef.current?.slickNext()
	}
	const prevSlide = () => {
		sliderRef.current?.slickPrev()
	}

	return (
		<div className='slider-review'>
			<div className='slider-review__header'>
				<h2>Отзывы</h2>
				<Button.Dark onClickHandler={ToggleModel.clickedButton} addition>
					Добавить отзыв
				</Button.Dark>
			</div>
			<div className='slider-review__list-reviews'>
				<Slider
					dots
					infinite
					speed={500}
					slidesToScroll={1}
					slidesToShow={2}
					accessibility
					arrows={false}
					adaptiveHeight
					ref={sliderRef}
					dotsClass='slider-review__dots'
					responsive={[
						{
							breakpoint: 767.98,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							},
						},
					]}
				>
					{UserReviewsList}
				</Slider>
			</div>
			<div className='slider-review__button-area'>
				<ArrowSlider rotate={180} onClick={prevSlide} />
				<ArrowSlider onClick={nextSlide} />
			</div>
		</div>
	)
}
