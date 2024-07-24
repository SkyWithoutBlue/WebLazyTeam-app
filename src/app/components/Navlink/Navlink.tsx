'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navlink.module.scss'

const Navlink = (link: { url: string; title: string }) => {
	const pathName = usePathname()

	return (
		<Link
			className={`${styles.navlink} ${
				pathName === link.url && `${styles.navlinkAction}`
			}`}
			href={`${link.url}`}
		>
			{link.title}
		</Link>
	)
}

export default Navlink
