'use client'

import { motion } from 'framer-motion'
import ContactSection from '../components/ContactSection/ContactSection'

const ContactsPage = () => {
	return (
		<motion.div
			className=' h-full pt-20 md:pt-32'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.5 }}
		>
			<ContactSection />
		</motion.div>
	)
}

export default ContactsPage
