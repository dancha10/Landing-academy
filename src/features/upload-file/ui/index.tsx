import { FC, useRef } from 'react'

import { Button } from 'shared/ui/buttons'

import { imageReader, resetStores } from '../model'

import './style.scss'

export const UploadFile: FC = () => {
	const fileRef = useRef<HTMLInputElement>(null)
	const clickButton = () => {
		fileRef?.current?.click()
		resetStores()
	}
	return (
		<label htmlFor='file' className='file-upload' title='Загрузить изображение'>
			<input
				type='file'
				name='avatar-upload'
				id='file'
				ref={fileRef}
				accept='.png, .jpg, .jpeg'
				onChange={e => imageReader(e.target.files)}
			/>
			<Button.Dark onClickHandler={clickButton} addition>
				Загрузить фото
			</Button.Dark>
		</label>
	)
}
