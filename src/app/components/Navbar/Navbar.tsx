'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { listItemVariants, listVariants } from '../../utils/motion'
import Navlink from '../Navlink/Navlink'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import styles from './navbar.module.scss'

const links = [
	{ url: '/', title: 'О нас' },
	{ url: '/portfolio', title: 'Портфолио' },
	{ url: '/team', title: 'Команда' },
	{ url: '/contacts', title: 'Контакты' },
]

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	/* Scroll Lock */
	useEffect(() => {
		if (open) {
			const scrollY = window.scrollY
			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollY}px`
		} else {
			const scrollY = document.body.style.top
			document.body.style.position = ''
			document.body.style.top = ''
			window.scrollTo(0, parseInt(scrollY || '0') * -1)
		}

		return () => {
			document.body.style.position = ''
			document.body.style.top = ''
		}
	}, [open])

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

	return (
		<header
			className={`${styles.wrapper} ${
				scrolled
					? 'hidden md:block bg-indigo-300 dark:bg-black transition-colors ease delay-300 rounded-b-[100px] '
					: ''
			}`}
		>
			<div className={styles.navTopContainer}>
				<div className='flex justify-left md:justify-center gap-6 flex-col-reverse md:flex-row sm:m-4 '>
					<Link href='/' className='text-xl'>
						Web<span className='text-[#FBF080]'>Lazy</span>Team
					</Link>
					<div className='flex justify-start absolute top-3 right-5'>
						<ThemeSwitcher />
					</div>
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
						className='rounded-md w-10 h-1 bg-black origin-left dark:bg-white'
					></motion.div>
					<motion.div
						variants={centerVariants}
						animate={open ? 'opened' : 'closed'}
						className='rounded-md w-10 h-1 bg-black origin-left dark:bg-white'
					></motion.div>
					<motion.div
						variants={bottomVariants}
						animate={open ? 'opened' : 'closed'}
						className='rounded-md w-10 h-1 bg-black origin-left dark:bg-white'
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
		</header>
	)
}

export default Navbar
