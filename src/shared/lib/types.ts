export interface IButtonProps {
	type?: 'button' | 'submit' | 'reset'
	onClickHandler: () => void
	disabled?: boolean
}
