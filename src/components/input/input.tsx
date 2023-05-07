import styles from './input.module.scss'

interface IInput {
	label: string
	type: string
	placeholder: string
}

export const Input = ({ label, type, placeholder }: IInput) => {
	return (
		<label className={styles.container}>
			<div className={styles.label}>{label}</div>
			<input className={styles.input} type={type} placeholder={placeholder} />
		</label>
	)
}