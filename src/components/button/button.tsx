import React from "react"
import styles from "./button.module.scss"

export const Button = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"button">) => {
	return (
		<button
			className={`${styles.button} ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}
