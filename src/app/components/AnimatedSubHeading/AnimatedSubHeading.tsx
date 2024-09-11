import { motion } from 'framer-motion'
import { textVariant } from '@/app/utils/motion'
interface AnimatedHeadingProps {
	text: string
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
