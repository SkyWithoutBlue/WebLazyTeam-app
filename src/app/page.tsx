'use client'
import AboutSection from './components/AboutSection/AboutSection'
import ContactSection from './components/ContactSection/ContactSection'
import MainSection from './components/MainSection/MainSection'
import PortfolioSection from './components/PortfolioSection/PortfolioSection'
import ServiceSection from './components/ServiceSection/ServiceSection'
import TeamSection from './components/TeamSection/TeamSection'

export default function Home() {
	return (
		<>
			<MainSection />
			<AboutSection />
			<ServiceSection />
			<PortfolioSection />
			<TeamSection />
			<ContactSection />
		</>
	)
}
