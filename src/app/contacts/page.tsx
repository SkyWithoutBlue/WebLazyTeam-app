'use client'

import { motion } from 'framer-motion'
import ContactSection from '../components/ContactSection/ContactSection'

const ContactsPage = () => {
	return (
		<motion.div
			className=' h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<ContactSection />
		</motion.div>
	)
}

export default ContactsPage
