'use client'
import { motion } from 'framer-motion'
import styles from './contacts.module.scss'
const ContactsPage = () => {
	return (
		<motion.div
			className={styles.motionContainer}
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div>Контакты</div>
		</motion.div>
	)
}

export default ContactsPage
