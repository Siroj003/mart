import styles from "./sponsors.module.scss"
import { sponsorsList } from "@/sections/sponsors/constants"

export const Sponsors = () => {
	return (
		<section className={`${styles.sponsors} container-fluid`}>
			<div className="container">
				<ul className={`${styles.ul} scroll-hidden`}>
					{sponsorsList.map(({ Icon }, index) => (
						<li key={index}>
							<Icon />
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}