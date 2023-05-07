import testimonial1 from "../../../public/images/testimonial1.webp"
import testimonial2 from "../../../public/images/testimonial2.webp"
import testimonial3 from "../../../public/images/testimonial3.webp"
import { StaticImageData } from "next/image"

export interface IItemsData {
	photo: StaticImageData,
	text: string,
	name: string,
	job: string
}

export const testimonialsData: IItemsData[] = [
	{
		photo: testimonial1,
		text: "Lorem ipsum dolor sit amet consectetur. Egestas nulla pellentesque libero odio dolor pellentesque maecenas non. Ipsum pulvinar diam sed semper tortor nulla pharetra neque.",
		name: "Nico Robin",
		job: "Ceo of Restoration Company"
	},
	{
		photo: testimonial2,
		text: "Lorem ipsum dolor sit amet consectetur. Aenean arcu elementum elit pharetra fermentum rutrum. Eu scelerisque auctor amet scelerisque nascetur integer nibh diam aliquam. Gravida felis convallis diam.",
		name: "Courtney Henry",
		job: "Ceo of CSM Company"
	},
	{
		photo: testimonial3,
		text: "Lorem ipsum dolor sit amet consectetur. Varius elementum commodo turpis ac lectus donec ut cras. In posuere diam vitae nunc eget. Viverra sit venenatis dui sed. Sed a dignissim vitae adipiscing enim sed. Amet.",
		name: "Arlene McCoy",
		job: "Ceo of Universoft Company"
	},
	{
		photo: testimonial2,
		text: "Lorem ipsum dolor sit amet consectetur. Aenean arcu elementum elit pharetra fermentum rutrum. Eu scelerisque auctor amet scelerisque nascetur integer nibh diam aliquam. Gravida felis convallis diam.",
		name: "Courtney Henry",
		job: "Ceo of CSM Company"
	},
]