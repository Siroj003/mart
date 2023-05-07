import React from "react"
import styles from "./menu.module.scss"
import { IconMenu } from "@/components/icons/menu"
import Link from "next/link"
import { IconLogoMobile } from "@/components/icons/logo"
import { useMenu } from "@/components/menu/useMenu"
import { IconClose } from "@/components/icons/close"
import { navlist } from "@/constants/nav"
import { Button } from "@/components/button"
import { contacts } from "@/constants/contacts"

export const Menu = () => {
	const { open, handleClick } = useMenu()

	return (
		<>
			<div className={`${styles.menuContainer} container-fluid`}>
				<button
					className={styles.wrapIcon}
					onClick={handleClick}
				>
					<IconMenu />
				</button>
				<Link href="/">
					<IconLogoMobile />
				</Link>
			</div>
			<div className={open ? `${styles.sidebar} ${styles.transform}` : styles.sidebar}>
				<div className={`${styles.header} container-fluid`}>
					<button className={styles.wrapIcon} onClick={handleClick}>
						<IconClose />
					</button>
					<Link href="/">
						<IconLogoMobile />
					</Link>
				</div>
				<div className={styles.subheader}>
					<div>
						<nav className={styles.nav}>
							<ul>
								{navlist.map(({ title, href }, index) => (
									<li key={index} onClick={handleClick}>
										<Link href={href}>
											{title}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<Link href="#contacts">
							<Button>Get in Touch</Button>
						</Link>
					</div>
					<div className={styles.contacts}>
						{contacts.map(({ title, text, Icon, link }, index) => (
							<Link
								className={styles.link}
								href={link}
								key={index}
							>
								<Icon />
								<div className={styles.details}>
									<span>
										{title}
									</span>
									<p>
										{text}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
