import React from "react"
import styles from "./about.module.scss"
import Image from "next/image"
import { IconBox } from "@/components/icons/box"
import { IconMoney } from "@/components/icons/money"
import storage from "../../../public/images/storage.webp"
import { SubTitle } from "@/components/subTitle"

export const About = () => {
	return (
		<div id="about" className={`${styles.about} container-fluid`}>
			<div className={styles.backgroud} />
			<div className={`${styles.card} container`}>
				<div className={styles.cardInfo}>
					<SubTitle>Why Us</SubTitle>
					<h2 className={styles.title}>
						We provide full range global <br/> logistics solution
					</h2>
					<div className={styles.text}>
						<p>
							Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
						</p>
						<p>
							Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
						</p>
					</div>
					<div className={styles.wrapIcon}>
						<div>
							<IconBox />
							Delivery on Time
						</div>
						<div>
							<IconMoney />
							Optimized Travel Cost
						</div>
					</div>
				</div>
				<div>
					<Image
						className={styles.image}
						src={storage}
						alt="storage"
					/>
				</div>
			</div>
		</div>
	)
}
