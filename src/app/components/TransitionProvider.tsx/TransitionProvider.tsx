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
			<div key={pathName} className={styles.providerWrapper}>
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
