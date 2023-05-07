import React from "react"
import styles from "./contacts.module.scss"
import Image from "next/image"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import redTuckImage from "../../../public/images/red-truck.webp"
import { SubTitle } from "@/components/subTitle"

export const Contacts = () => {
	return (
		<section id="contacts" className={`${styles.contacts} container-fluid`}>
			<div className={styles.left}>
				<Image className={styles.image} src={redTuckImage} alt="redTuckImage" />
			</div>
			<div className={styles.right}>
				<SubTitle className={styles.subtitle}>Contact Us</SubTitle>
				<h2>How can we help you?</h2>
				<p>
					Whatever you need delivered across the 48 states, get in touch to learn more and get a quote.
				</p>
				<div className={styles.inputs}>
					<Input label="Full name" type="text" placeholder="Enter full name" />
					<Input label="Phone number" type="text" placeholder="Enter phone number" />
					<Input label="E-mail" type="text" placeholder="Enter email" />
				</div>
				<Button className={styles.button}>Submit</Button>
			</div>
		</section>
	)
}
