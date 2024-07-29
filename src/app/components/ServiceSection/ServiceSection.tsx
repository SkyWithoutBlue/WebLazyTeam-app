import { motion } from 'framer-motion'
import { Rubik } from 'next/font/google'

import { textAnimation, underlineAnimation } from '@/app/utils/motion'
const RubikFont400 = Rubik({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
})

const ServiceSection = () => {
	return (
		<div className='bg-white text-black dark:bg-black dark:text-white  m-auto '>
			<div className='flex flex-col max-w-6xl m-auto p-4'>
				<div className='flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 p-3 sm:p-4 '>
					<motion.h1
						initial='hidden'
						whileInView='visible'
						transition={{ duration: 2 }}
						viewport={{ once: true }}
						variants={textAnimation}
						className='flex justify-center items-center m-auto uppercase text-4xl sm:text-5xl p-2'
					>
						Услуги
					</motion.h1>
					<motion.div
						initial='hidden'
						whileInView='visible'
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						variants={underlineAnimation}
						className='w-full h-1 bg-red-300 my-4'
					></motion.div>
					<div>
						<motion.h2
							initial='hidden'
							whileInView='visible'
							transition={{ duration: 2 }}
							viewport={{ once: true }}
							variants={textAnimation}
							className='text-lg text-[#979CF8] sm:text-2xl md:text-3xl lg:text-4xl'
						>
							Разработка сайтов
						</motion.h2>
						<ul
							className={`${'list-disc sm:text-2xl md:text-3xl lg:text-4xl'}+ ${
								RubikFont400.className
							}`}
						>
							<motion.li
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								className='p-2'
							>
								Корпоративные сайты: Создаем стильные и функциональные сайты для
								бизнеса
							</motion.li>
							<motion.li
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								className='p-2'
							>
								Интернет-магазины: Разработка удобных и безопасных платформ для
								онлайн-продаж
							</motion.li>
							<motion.li
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								className='p-2'
							>
								Лендинги: Эффективные одностраничные сайты для продвижения ваших
								услуг или продуктов
							</motion.li>
						</ul>
					</div>
					<div>
						<motion.h2
							initial='hidden'
							whileInView='visible'
							transition={{ duration: 2 }}
							viewport={{ once: true }}
							variants={textAnimation}
							className='text-lg text-[#979CF8] sm:text-2xl md:text-3xl lg:text-4xl'
						>
							Дизайн
						</motion.h2>
						<ul
							className={`${'list-disc sm:text-2xl md:text-3xl lg:text-4xl'}+ ${
								RubikFont400.className
							}`}
						>
							<motion.li
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								className='p-2'
							>
								UI/UX дизайн: Разработка интуитивно понятного и привлекательного
								интерфейса.
							</motion.li>
							<motion.li
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								className='p-2'
							>
								Брендинг: Создание уникального визуального стиля, который
								выделит ваш бизнес.
							</motion.li>
						</ul>
					</div>
					<div>
						<motion.h2
							initial='hidden'
							whileInView='visible'
							transition={{ duration: 2 }}
							viewport={{ once: true }}
							variants={textAnimation}
							className='text-lg text-[#979CF8] sm:text-2xl md:text-3xl lg:text-4xl'
						>
							Поддержка и обслуживание
						</motion.h2>
						<ul
							className={`${'list-disc sm:text-2xl md:text-3xl lg:text-4xl'}+ ${
								RubikFont400.className
							}`}
						>
							<motion.li
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								className='p-2'
							>
								Техническая поддержка: Обеспечиваем бесперебойную работу вашего
								сайта.
							</motion.li>
							<motion.li
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								className='p-2'
							>
								SEO-оптимизация: Помогаем улучшить видимость вашего сайта в
								поисковых системах.
							</motion.li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceSection
