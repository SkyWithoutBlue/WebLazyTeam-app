'use client'
import { motion } from 'framer-motion'
import { Suspense, lazy, memo } from 'react'
import AboutSection from './components/AboutSection/AboutSection'
import MainSection from './components/MainSection/MainSection'
import PortfolioSection from './components/PortfolioSection/PortfolioSection'
import ServiceSection from './components/ServiceSection/ServiceSection'
import TeamSection from './components/TeamSection/TeamSection'

const LazyContactSection = lazy(
	() => import('./components/ContactSection/ContactSection')
)

const ContactSection = memo(LazyContactSection)

export default function Home() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<motion.div
				className=' h-full bg-black'
				initial={{ y: '-200vh' }}
				animate={{ y: '0vh' }}
				transition={{ duration: 0.5 }}
			>
				<MainSection />
			</motion.div>
			<AboutSection />
			<ServiceSection />
			<PortfolioSection />
			<TeamSection />
			<ContactSection />
		</Suspense>
	)
}
