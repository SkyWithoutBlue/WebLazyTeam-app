'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const TransitionProvider = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	const pathName = usePathname()
	return (
		<AnimatePresence mode='wait'>
			<div
				key={pathName}
				className='min-h-screen flex flex-col bg-white dark:bg-black'
			>
				<motion.div
					className='fixed bg-black rounded-b-[100px] z-[65] w-full'
					style={{ height: '0vh' }}
					animate={{ height: '0vh' }}
					exit={{ height: '140vh' }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				/>

				<motion.div
					className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-4xl sm:text-5xl lg:text-7xl md:text-6xl xl:text-8xl cursor-default z-[70] w-fit h-fit font-rubik-mono'
					initial={{ opacity: 1 }}
					animate={{ opacity: 0, display: 'none' }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				>
					{pathName === '/' ? 'WebLazyTeam' : pathName.substring(1)}
				</motion.div>

				<motion.div
					className='fixed bg-black rounded-t-[100px] bottom-0 z-[65] w-full'
					style={{ height: '0vh' }}
					initial={{ height: '140vh' }}
					animate={{ height: '0vh', transition: { delay: 0.5 } }}
				/>

				<Navbar />
				<div className='flex-grow'>{children}</div>
				<Footer />
			</div>
		</AnimatePresence>
	)
}

export default TransitionProvider
