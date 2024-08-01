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
			className='text-lg text-[#979CF8] sm:text-2xl md:text-3xl lg:text-4xl font-rubik-mono'
		>
			{text}
		</motion.h1>
	)
}

export default AnimatedHeading
