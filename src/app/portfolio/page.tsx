'use client'

import { motion } from 'framer-motion'
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'

const PortfolioPage = () => {
	return (
		<motion.div
			className='pt-20 md:pt-32 h-full'
			initial={{ y: '-200vh' }} // Смещение на высоту экрана
			animate={{ y: '0%' }}
			transition={{ duration: 0.5 }}
		>
			<PortfolioSection />
		</motion.div>
	)
}

export default PortfolioPage
