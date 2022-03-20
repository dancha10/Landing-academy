import { FC } from 'react'
import { useStore } from 'effector-react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ToggleModal, ToggleModel } from 'features/toggle-modal'
import { Modal } from 'shared/ui/modal'
import { Input } from 'shared/ui/input'
import { Button } from 'shared/ui/buttons'
import { Textarea } from 'shared/ui/textarea'

import { ReactComponent as Information } from '../lib/info.svg'
import { ReactComponent as Cross } from '../lib/cross.svg'
import { detailedReviewValidator, fullNameValidator } from '../lib/validator'

import './style.scss'

interface IReviewModalInputs {
	fullName: string
	detailedReview: string
}

export const ReviewModel: FC = () => {
	const isOpen = useStore(ToggleModel.$isOpen)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IReviewModalInputs>()

	const onSubmit: SubmitHandler<IReviewModalInputs> = data => console.log(data)

	return (
		<Modal isOpen={isOpen} toggleOpen={ToggleModel.clickedButton}>
			<div className='review-model'>
				<div className='review-model__header'>
					<h4>Отзыв</h4>
					<ToggleModal />
				</div>
				<form className='review-model__form' onSubmit={handleSubmit(onSubmit)}>
					<p className='review-model__label'>Как вас зовут?</p>
					<div className='review-model__form-field'>
						<Input
							placeholder='Имя Фамилия'
							validator={{ ...register('fullName', fullNameValidator) }}
						/>
						<Button.Dark addition onClickHandler={() => {}}>
							Загрузить фото
						</Button.Dark>
						{errors.fullName && (
							<div className='review-model__error-message'>
								<Cross width={10} height={10} />
								<span>{errors.fullName?.message}</span>
							</div>
						)}
					</div>
					<div className='review-model__textarea'>
						<p className='review-model__label'>Все ли вам понравилось?</p>
						<Textarea
							placeholder='Напишите пару слов о вашем опыте...'
							maxLength={200}
							validator={{ ...register('detailedReview', detailedReviewValidator) }}
						/>
						{errors.detailedReview && (
							<div className='review-model__error-message'>
								<Cross width={10} height={10} />
								<span>{errors.detailedReview?.message}</span>
							</div>
						)}
					</div>
					<div className='review-model__submit'>
						<Button.Dark type='submit' onClickHandler={() => {}}>
							Отправить отзыв
						</Button.Dark>
						<div className='review-model__information'>
							<Information />
							<span>Все отзывы проходят модерацию в течение 2 часов</span>
						</div>
					</div>
				</form>
			</div>
		</Modal>
	)
}
