'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlink = (link: { url: string; title: string }) => {
	const pathName = usePathname()

	return (
		<Link
			className={`${'p-1 text-lg rounded-2xl flex items-center whitespace-nowrap font-rubik-mono'} ${
				pathName === link.url &&
				`${'font-semibold !text-[#fbf080] dark:text-[#fbf080]'}`
			}`}
			href={`${link.url}`}
		>
			{link.title}
		</Link>
	)
}

export default Navlink
