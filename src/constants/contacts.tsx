import { IconEmail, IconEmailMobile } from "@/components/icons/email"
import { IconPhone, IconPhoneMobile } from "@/components/icons/phone"

const mail = "contact@logistics.com"
const tel = "(00) 112 365 489"

export const contacts = [
	{
		title: "Email",
		text: mail,
		Icon: IconEmail,
		link: `mailto:${mail}`,
		IconMobile: IconEmailMobile,
	},
	{
		title: "Call Us",
		text: tel,
		Icon: IconPhone,
		link: `tel:${tel}`,
		IconMobile: IconPhoneMobile,
	}
]