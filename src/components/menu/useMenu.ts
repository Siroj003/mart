import { useCallback, useEffect, useRef, useState } from "react"
import { useRouter } from 'next/router'

export const useMenu = () => {
	const { pathname } = useRouter()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (open) {
			setOpen(false)
		}
	}, [pathname])


	const handleClick = useCallback(() => {
		const html = document.querySelector('html')
		setOpen(prev => !prev)
		if (html) {
			html.style.overflowY = open ? 'auto' : 'hidden'
		}
	}, [open, setOpen])

	return { open, handleClick }
}
