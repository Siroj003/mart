import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import styles from '../styles/layout.module.scss'
import { Header } from "@/components/header"
import { Menu } from "@/components/menu"
import { Footer } from "@/components/footer"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={styles.container}>
			<Header />
			<Menu />
			<Component {...pageProps} />
			<Footer />
		</div>
	)
}
