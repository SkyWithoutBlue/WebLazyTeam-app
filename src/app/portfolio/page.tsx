'use client'

import { motion } from 'framer-motion'
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'

const PortfolioPage = () => {
	return (
		<motion.div
			className=' pt-12 md:pt-28'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.5 }}
		>
			<PortfolioSection />
		</motion.div>
	)
}

export default PortfolioPage
