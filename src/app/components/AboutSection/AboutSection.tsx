import {
	imageAnimation,
	textAnimation,
	underlineAnimation,
} from '@/app/utils/motion'
import { motion } from 'framer-motion'
import { Rubik } from 'next/font/google'
import Image from 'next/image'
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

const AboutSection = () => {
	return (
		<div
			id='about'
			className='bg-white text-black dark:bg-black dark:text-white  m-auto'
		>
			<div className='flex flex-col max-w-6xl m-auto p-4'>
				<h1 className='flex justify-center items-center m-auto uppercase text-4xl sm:text-5xl p-2'>
					О НАС
				</h1>
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
						variants={imageAnimation}
						className='grid grid-cols-2 grid-rows-2 gap-12 relative'
					>
						{images.map(img => (
							<Image
								className='pointer-events-none'
								src={img.url}
								alt={img.alt}
								width={210}
								height={210}
								key={img.url}
							/>
						))}
					</motion.div>

					<motion.p
						initial='hidden'
						whileInView='visible'
						transition={{ duration: 2 }}
						viewport={{ once: true }}
						variants={textAnimation}
						className='text-1xl sm:text-2xl md:text-3xl md:w-1/2'
					>
						Мы — команда{' '}
						<span className='text-[#979CF8]'>
							опытных разработчиков и дизайнеров
						</span>
						, поможем вам создать веб-сайт, который не только привлечет
						внимание, но и будет эффективно работать на ваш бизнес. От простых
						лендингов до сложных интернет-магазинов — мы знаем, как сделать ваш
						проект <span className='text-[#979CF8]'> успешным.</span>
					</motion.p>
				</div>
			</div>
		</div>
	)
}

export default AboutSection
