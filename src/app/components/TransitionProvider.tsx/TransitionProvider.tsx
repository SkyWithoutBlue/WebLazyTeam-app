'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import styles from './transitionProvider.module.scss'

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
				className='w-full bg-[radial-gradient(_89.76%_53.41%_at_76.46%_53.61%,_rgb(182,_226,_251)_0%,_rgb(168,_195,_250)_44.49999928474426%,_rgb(151,_156,_248)_100%)] dark:bg-gradient-to-r from-slate-900 to-slate-700'
			>
				<motion.div
					className={styles.providerTop}
					animate={{ height: '0vh' }}
					exit={{ height: '140vh' }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				/>
				<motion.div
					className={styles.providerMiddle}
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1, ease: 'easeOut' }}
				>
					{pathName.substring(1)}
				</motion.div>

				<motion.div
					className={styles.providerBottom}
					initial={{ height: '140vh' }}
					animate={{ height: '0vh', transition: { delay: 0.5 } }}
				/>

				<Navbar />

				<div className={styles.transitionProviderWrapper}>
					{children}

					<Footer />
				</div>
			</div>
		</AnimatePresence>
	)
}

export default TransitionProvider
