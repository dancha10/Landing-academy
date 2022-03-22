export interface IButtonProps {
	type?: 'button' | 'submit' | 'reset'
	onClickHandler?: () => void
	disabled?: boolean
}

export interface IUserReview {
	fullName: string
	dateOfPost: string
	review: string
	avatar?: string
}

export interface IInput {
	placeholder: string
	disabled?: boolean
	validator?: Object
	isError: boolean
}
