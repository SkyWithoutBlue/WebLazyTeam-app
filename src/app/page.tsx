'use client'
import { motion } from 'framer-motion'
import { Suspense, lazy, memo } from 'react'

const LazyMainSection = lazy(
	() => import('./components/MainSection/MainSection')
)
const LazyAboutSection = lazy(
	() => import('./components/AboutSection/AboutSection')
)
const LazyServiceSection = lazy(
	() => import('./components/ServiceSection/ServiceSection')
)
const LazyPortfolioSection = lazy(
	() => import('./components/PortfolioSection/PortfolioSection')
)
const LazyTeamSection = lazy(
	() => import('./components/TeamSection/TeamSection')
)
const LazyContactSection = lazy(
	() => import('./components/ContactSection/ContactSection')
)

const MainSection = memo(LazyMainSection)
const AboutSection = memo(LazyAboutSection)
const ServiceSection = memo(LazyServiceSection)
const PortfolioSection = memo(LazyPortfolioSection)
const TeamSection = memo(LazyTeamSection)
const ContactSection = memo(LazyContactSection)

export default function Home() {
	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.5 }} // Уменьшил продолжительность анимации
		>
			<Suspense fallback={<div>Loading...</div>}>
				<MainSection />
				<AboutSection />
				<ServiceSection />
				<PortfolioSection />
				<TeamSection />
				<ContactSection />
			</Suspense>
		</motion.div>
	)
}
