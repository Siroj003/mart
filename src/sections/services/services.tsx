import React from "react"
import styles from "./services.module.scss"
import { servicesList } from "@/sections/services/constants"
import { SubTitle } from "@/components/subTitle"

export const Services = () => {
	return (
		<section id="services" className={`${styles.section} container-fluid`}>
			<div className={`${styles.services} container`}>
				<div className={styles.title}>
					<SubTitle>What We Do</SubTitle>
					<h2>Our Logistics Services</h2>
				</div>
				<div className={styles.wrap}>
					{servicesList.map(({ title, Icon, text }, index) => (
						<div className={styles.service} key={index}>
							<Icon />
							<div className={styles.details}>
								<h4>{title}</h4>
								<p>{text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
