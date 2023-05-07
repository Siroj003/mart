import React from "react"
import styles from "./subTitle.module.scss"
export const SubTitle = ({ children, className }: React.ComponentPropsWithoutRef<"span">) => {
	return (
		<span className={`${styles.subTitle} ${className}`}>{children}</span>
	)
}