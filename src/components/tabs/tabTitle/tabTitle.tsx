import React, { useCallback } from "react"

import styles from "./tabTitle.module.scss"

export type Props = {
	title: string;
	index: number;
	setSelectedTab: (index: number) => void;
	isActive?: boolean;
};

export const TabTitle = (props: Props): JSX.Element => {
	const { title, setSelectedTab, index, isActive } = props

	const handleOnClick = useCallback(() => {
		setSelectedTab(index)
	}, [setSelectedTab, index])

	return (
		<li className={`${isActive ? `${styles.active}` : ""}`}>
			<button
				className={`${styles.button} ${index === 0 ? `${styles.leftBrdR}` : `${styles.rightBrdR}`}`}
				onClick={handleOnClick}
			>
				{title}
			</button>
		</li>
	)
}
