'use client'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState } from 'react'
import Navlink from '../Navlink/Navlink'
import styles from './navbar.module.scss'

const links = [
	{ url: '/', title: 'О нас' },
	{ url: '/portfolio', title: 'Портфолио' },
	{ url: '/team', title: 'Команда' },
	{ url: '/contacts', title: 'Контакты' },
]
interface links {
	url: string
	title: string
}
const Navbar = () => {
	const [open, setOpen] = useState(false)

	const topVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: 'rgb(255,255,255)',
		},
	}
	const centerVariants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	}
	const bottomVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: 'rgb(255,255,255)',
		},
	}
	const listVariants = {
		closed: {
			x: '100vw',
		},
		opened: {
			x: 0,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
	}
	const listItemVariants = {
		closed: {
			x: -10,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	}
	const { theme, setTheme } = useTheme()
	return (
		<div className={styles.wrapper}>
			<div className={styles.navTopContainer}>
				<div className={styles.logoContainer}>
					<div className='flex flex-row'>
						The current theme is: {theme}
						<button
							className='bg-white text-black rounded-full w-10 h-10'
							onClick={() => setTheme('light')}
						>
							LHT
						</button>
						<button
							className='bg-black text-white rounded-full w-10 h-10'
							onClick={() => setTheme('dark')}
						>
							DRK
						</button>
					</div>
					<Link href='/' className={styles.logoLink}>
						WebLazyTeam
					</Link>
				</div>

				<div className={styles.links}>
					{links.map(link => (
						<Navlink
							url={`${link.url}`}
							title={`${link.title}`}
							key={link.title}
						/>
					))}
				</div>
			</div>

			{/* RESPONSIVE MENU */}
			<div className={styles.menuWrapper}>
				{/* MENU BUTTON */}
				<button
					className={styles.menuButton}
					onClick={() => setOpen(prev => !prev)}
				>
					<motion.div
						variants={topVariants}
						animate={open ? 'opened' : 'closed'}
						className={styles.topLine}
					></motion.div>
					<motion.div
						variants={centerVariants}
						animate={open ? 'opened' : 'closed'}
						className={styles.midLine}
					></motion.div>
					<motion.div
						variants={bottomVariants}
						animate={open ? 'opened' : 'closed'}
						className={styles.bottomLine}
					></motion.div>
				</button>
				{/* MENU LIST */}
				{open && (
					<motion.div
						variants={listVariants}
						initial='closed'
						animate='opened'
						className={styles.menuList}
					>
						{links.map(link => (
							<motion.div variants={listItemVariants} key={link.title}>
								<Link href={link.url}>{link.title}</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	)
}

export default Navbar
