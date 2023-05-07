import React, { ReactElement, useState } from "react"

import styles from "./tabs.module.scss"
import { TabTitle, Props as TabTitleProps } from "../tabTitle"

type Props = {
	children: ReactElement<TabTitleProps>[];
	preSelectedTabIndex?: number;
};

export const Tabs = (props: Props): JSX.Element => {
	const { children, preSelectedTabIndex } = props

	// First tab is shown by default
	const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0)

	return (
		<div className={styles.tabs}>
			<ul>
				{children.map((item, index) => (
					<TabTitle
						key={item.props.title}
						title={item.props.title}
						index={index}
						isActive={index === selectedTabIndex}
						setSelectedTab={setSelectedTabIndex}
					/>
				))}
			</ul>
			{/* show selcted tab by index*/}
			{children[selectedTabIndex]}
		</div>
	)
}
