import { motion } from 'framer-motion'

import { textAnimation, contentVariant, underlineAnimation } from '@/app/utils/motion'
import AnimatedHeading from '../AnimatedHeading/AnimatedHeading'
import AnimatedSubHeading from '../AnimatedSubHeading/AnimatedSubHeading'

const ServiceSection = () => {
	return (
		<div className='bg-white text-black dark:bg-black dark:text-white  m-auto '>
			<div className='flex flex-col max-w-6xl m-auto p-4'>
				<div className='flex-col gap-4 md:gap-6'>
					<AnimatedHeading text='Услуги' />
					<motion.div
						initial='hidden'
						whileInView='visible'
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						variants={underlineAnimation}
						className='w-full h-1 bg-red-300 my-4'
					></motion.div>
					<div>
						<AnimatedSubHeading text='Разработка сайтов' />
						<ul className='list-disc sm:text-2xl md:text-3xl lg:text-4xl'>
							{[
								'Корпоративные сайты: Создаем стильные и функциональные сайты для бизнеса',
								'Интернет-магазины: Разработка удобных и безопасных платформ для онлайн-продаж',
								'Лендинги: Эффективные одностраничные сайты для продвижения ваших услуг или продуктов',
							].map((text, index) => (
								<motion.li
									key={index}
									custom={index}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									variants={contentVariant}
									className='p-2 font-rubik'
								>
									{text}
								</motion.li>
							))}
						</ul>

						<AnimatedSubHeading text='Дизайн' />
						<ul className='list-disc sm:text-2xl md:text-3xl lg:text-4xl'>
							{[
								'UI/UX дизайн: Разработка интуитивно понятного и привлекательного интерфейса',
								'Брендинг: Создание уникального визуального стиля, который выделит ваш бизнес',
							].map((text, index) => (
								<motion.li
									key={index}
									custom={index}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									variants={contentVariant}
									className='p-2 font-rubik'
								>
									{text}
								</motion.li>
							))}
						</ul>
					</div>
					<div>
						<AnimatedSubHeading text='Поддержка и обслуживание' />
						<ul className='list-disc sm:text-2xl md:text-3xl lg:text-4xl'>
							{[
								'Техническая поддержка: Обеспечиваем бесперебойную работу вашего сайта',
								'SEO-оптимизация: Помогаем улучшить видимость вашего сайта в поисковых системах',
							].map((text, index) => (
								<motion.li
									key={index}
									custom={index}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									variants={contentVariant}
									className='p-2 font-rubik'
								>
									{text}
								</motion.li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceSection
