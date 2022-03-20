import { FC } from 'react'

import { ToggleModel } from 'features/toggle-modal'
import { Button } from 'shared/ui/buttons'
import { UserComment } from 'shared/ui/user-comment'
import { SliderDot } from 'shared/ui/slider-dot'

import './style.scss'

export const SliderReviews: FC = () => {
	return (
		<div className='slider-review'>
			<div className='slider-review__header'>
				<h2>Отзывы</h2>
				<Button.Dark onClickHandler={() => ToggleModel.clickedButton()} addition>
					Добавить отзыв
				</Button.Dark>
			</div>
			<div className='slider-review__list-reviews'>
				<UserComment
					review='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vero?'
					name='Vasya1 Pupkin'
					yearOfBirth='10.08.1998'
				/>
				<UserComment
					review='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vero?'
					name='Vasya2 Pupkin'
					yearOfBirth='10.08.1998'
				/>
			</div>
			<div className='slider-review__dots'>
				<SliderDot isActive />
				<SliderDot isActive={false} />
				<SliderDot isActive={false} />
			</div>
			<div className='slider-review__button-area'>
				<button>next</button>
				<button>prev</button>
			</div>
		</div>
	)
}
