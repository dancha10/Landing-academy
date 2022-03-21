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
