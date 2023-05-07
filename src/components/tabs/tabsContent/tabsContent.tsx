import React from "react"
import styles from "./tabsContent.module.scss"
import { tabsText } from "@/components/tabs/tabsContent/constants"

export const TabsContent = () => {
	return (
		<div className={styles.wrapper}>
			{tabsText.map(({text, title}, index) => {
				return (
					<div className={styles.block} key={index}>
						<h4><span>{`0${index+1}`}</span>{title}</h4>
						<p>{text}</p>
					</div>
				)
			})}
		</div>
	)
}
