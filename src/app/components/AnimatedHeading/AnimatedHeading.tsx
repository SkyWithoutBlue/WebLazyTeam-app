import { motion } from 'framer-motion'

interface AnimatedHeadingProps {
	text: string
}

const textVariant = {
	hidden: { opacity: 0, x: -100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.5,
			ease: 'easeInOut',
			type: 'spring',
			stiffness: 100,
		},
	},
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text }) => {
	return (
		<motion.h1
			initial='hidden'
			whileInView='visible'
			variants={textVariant}
			viewport={{ once: true, amount: 0.5 }} // Убедитесь, что amount установлен на 0.5
			className='flex items-center uppercase text-4xl sm:text-5xl p-2 font-rubik-mono'
		>
			{text}
		</motion.h1>
	)
}

export default AnimatedHeading
