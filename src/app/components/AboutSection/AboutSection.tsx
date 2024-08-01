import { underlineAnimation } from '@/app/utils/motion'
import { motion } from 'framer-motion'
import { Rubik } from 'next/font/google'
import Image from 'next/image'
import AnimatedHeading from '../AnimatedHeading/AnimatedHeading'

const RubikFont400 = Rubik({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
})

const images = [
	{ url: '/AboutSection_1.svg', alt: '1' },
	{ url: '/AboutSection_2.svg', alt: '2' },
	{ url: '/AboutSection_3.svg', alt: '3' },
	{ url: '/AboutSection_4.svg', alt: '4' },
]

const textVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: 0.95,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 1,
			ease: 'easeOut',
		},
	},
}

const wordVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: 'easeOut',
			staggerChildren: 0.05,
		},
	},
}

const wordChildVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
}

const imageVariants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		rotate: -10,
	},
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			duration: 1,
			ease: 'easeOut',
			staggerChildren: 0.2,
		},
	},
}

const imageChildVariants = {
	hidden: { opacity: 0, scale: 0.8, rotate: -10 },
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
}

const AboutSection = () => {
	return (
		<div
			id='about'
			className='bg-white text-black dark:bg-black dark:text-white m-auto'
		>
			<div className='flex flex-col max-w-6xl m-auto p-4'>
				<AnimatedHeading text='О нас' />
				<motion.div
					initial='hidden'
					whileInView='visible'
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					variants={underlineAnimation}
					className='w-full h-1 bg-red-300 my-4'
				></motion.div>
				<div className='flex flex-col md:flex-row relative h-full w-full justify-between items-center gap-8 p-1'>
					<motion.div
						initial='hidden'
						whileInView='visible'
						transition={{ duration: 2 }}
						viewport={{ once: true }}
						variants={imageVariants}
						className='grid grid-cols-2 grid-rows-2 gap-12 relative'
					>
						{images.map((img, index) => (
							<motion.div
								key={img.url}
								variants={imageChildVariants}
								className='flex items-center justify-center'
							>
								<Image
									className='pointer-events-none'
									src={img.url}
									alt={img.alt}
									width={210}
									height={210}
								/>
							</motion.div>
						))}
					</motion.div>

					<motion.p
						initial='hidden'
						whileInView='visible'
						transition={{ duration: 2 }}
						viewport={{ once: true }}
						variants={textVariants}
						className='text-1xl sm:text-2xl md:text-3xl md:w-1/2 font-rubik'
					>
						{`Мы — команда `}
						<br />
						<motion.span
							variants={wordVariants}
							initial='hidden'
							animate='visible'
							className='text-[#979CF8]'
						>
							{`опытных разработчиков и дизайнеров`
								.split(' ')
								.map((word, index) => (
									<motion.span key={index} variants={wordChildVariants}>
										{word}
										{index <
											`опытных разработчиков и дизайнеров`.split(' ').length -
												1 && ' '}
									</motion.span>
								))}
						</motion.span>
						{`, поможем вам создать веб-сайт, который не только привлечет внимание, но и будет эффективно работать на ваш бизнес. От простых лендингов до сложных интернет-магазинов — мы знаем, как сделать ваш проект `}
						<motion.span className='text-[#979CF8]' variants={textVariants}>
							успешным.
						</motion.span>
					</motion.p>
				</div>
			</div>
		</div>
	)
}

export default AboutSection
