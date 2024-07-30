import { motion } from 'framer-motion'

import { textAnimation, underlineAnimation } from '@/app/utils/motion'

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
						className='flex justify-center items-center m-auto uppercase text-4xl sm:text-5xl p-2 font-rubik-mono'
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
							className='text-lg text-[#979CF8] sm:text-2xl md:text-3xl lg:text-4xl font-rubik-mono'
						>
							Разработка сайтов
						</motion.h2>
						<ul className='list-disc sm:text-2xl md:text-3xl lg:text-4xl'>
							<motion.li
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								className='p-2 font-rubik'
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
								className='p-2 font-rubik'
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
								className='p-2 font-rubik'
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
							className='text-lg text-[#979CF8] sm:text-2xl md:text-3xl lg:text-4xl font-rubik-mono'
						>
							Дизайн
						</motion.h2>
						<ul className='list-disc sm:text-2xl md:text-3xl lg:text-4xl'>
							<motion.li
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								className='p-2 font-rubik'
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
								className='p-2 font-rubik'
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
							className='text-lg text-[#979CF8] sm:text-2xl md:text-3xl lg:text-4xl font-rubik-mono'
						>
							Поддержка и обслуживание
						</motion.h2>
						<ul className='list-disc sm:text-2xl md:text-3xl lg:text-4xl'>
							<motion.li
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								className='p-2 font-rubik'
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
								className='p-2 font-rubik'
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
