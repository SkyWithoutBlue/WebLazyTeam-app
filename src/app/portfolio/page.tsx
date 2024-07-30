'use client'

import { motion } from 'framer-motion'
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'

const PortfolioPage = () => {
	return (
		<motion.div
			className=''
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<PortfolioSection />
		</motion.div>
	)
}

export default PortfolioPage
