// Обновите импорт (если необходимо)
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
	bottomVariants,
	centerVariants,
	listItemVariants,
	listVariants,
	topVariants,
} from '../../utils/motion'
import Navlink from '../Navlink/Navlink'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const links = [
	{ url: '/', title: 'О нас' },
	{ url: '/portfolio', title: 'Портфолио' },
	{ url: '/team', title: 'Команда' },
	{ url: '/contacts', title: 'Контакты' },
]

const themeSwitcherVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
}

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const pathName = usePathname()

	const handleScroll = () => {
		if (window.scrollY > 20) {
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

	return (
		<header
			className={`${'flex items-center justify-between px-4 w-screen fixed top-0 z-[60]'} ${
				scrolled
					? 'hidden lg:block backdrop-blur-3xl border-b-[1px] border-red-300'
					: ''
			}`}
		>
			<div className='flex justify-between md:w-full pt-5 lg:p-4 gap max-w-6xl lg:m-auto items-center'>
				<div className='flex justify-left'>
					<Link href='/' className='text-xl md:text-2xl font-rubik-mono'>
						Web<span className='text-[#FBF080]'>Lazy</span>Team
					</Link>
				</div>
				<div className='hidden p-1 lg:p-4 lg:flex gap-4 justify-center border-[1px] border-[#add7ff] rounded-3xl items-center m-auto h-[66px]'>
					{links.map(link => (
						<Navlink
							url={`${link.url}`}
							title={`${link.title}`}
							key={link.title}
						/>
					))}
				</div>
				<div className='hidden lg:flex'>
					<ThemeSwitcher />
				</div>
			</div>

			{/* RESPONSIVE MENU */}
			<div className='flex lg:hidden'>
				{/* MENU BUTTON */}
				<button
					className='flex relative z-50 flex-col justify-between w-10 h-8'
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
						className='flex absolute top-0 left-0 z-40 flex-col gap-8 justify-center items-center w-screen h-screen text-4xl overflow-hidden bg-black text-white'
					>
						{links.map((link, index) => (
							<motion.div
								variants={listItemVariants}
								key={link.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								<Link
									href={link.url}
									className={`${'p-1 text-3xl rounded-2xl text-white flex items-center whitespace-nowrap font-rubik-mono'} ${
										pathName === link.url &&
										`${'font-semibold text-[#fbf080] dark:text-[#fbf080]'}`
									}`}
								>
									{link.title}
								</Link>
							</motion.div>
						))}

						<motion.div
							variants={themeSwitcherVariants}
							initial='hidden'
							animate='visible'
							transition={{ delay: links.length * 0.1 }}
						>
							<ThemeSwitcher />
						</motion.div>
					</motion.div>
				)}
			</div>
		</header>
	)
}

export default Navbar
