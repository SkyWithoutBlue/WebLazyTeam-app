import { Rubik } from 'next/font/google'

const RubikFont400 = Rubik({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
})
const ServiceSection = () => {
	return (
		<div className='bg-white text-black dark:bg-black dark:text-white  m-auto '>
			<div className='flex flex-col max-w-6xl m-auto p-4'>
				<div className='flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 p-3 sm:p-4'>
					<h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl'>
						Услуги
					</h1>
					<div>
						<h2 className='text-lg text-[#979CF8] sm:text-2xl md:text-3xl lg:text-4xl'>
							Разработка сайтов
						</h2>
						<ul
							className={`${'list-disc sm:text-2xl md:text-3xl lg:text-4xl'}+ ${
								RubikFont400.className
							}`}
						>
							<li className={RubikFont400.className}>
								Корпоративные сайты: Создаем стильные и функциональные сайты для
								бизнеса
							</li>
							<li className={RubikFont400.className}>
								Интернет-магазины: Разработка удобных и безопасных платформ для
								онлайн-продаж
							</li>
							<li className={RubikFont400.className}>
								Лендинги: Эффективные одностраничные сайты для продвижения ваших
								услуг или продуктов
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-lg text-[#979CF8] sm:text-2xl md:text-3xl lg:text-4xl'>
							Дизайн
						</h2>
						<ul
							className={`${'list-disc sm:text-2xl md:text-3xl lg:text-4xl'}+ ${
								RubikFont400.className
							}`}
						>
							<li className={RubikFont400.className}>
								UI/UX дизайн: Разработка интуитивно понятного и привлекательного
								интерфейса.
							</li>
							<li className={RubikFont400.className}>
								Брендинг: Создание уникального визуального стиля, который
								выделит ваш бизнес.
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-lg text-[#979CF8] sm:text-2xl md:text-3xl lg:text-4xl'>
							Поддержка и обслуживание
						</h2>
						<ul
							className={`${'list-disc sm:text-2xl md:text-3xl lg:text-4xl'}+ ${
								RubikFont400.className
							}`}
						>
							<li className={RubikFont400.className}>
								Техническая поддержка: Обеспечиваем бесперебойную работу вашего
								сайта.
							</li>
							<li className={RubikFont400.className}>
								SEO-оптимизация: Помогаем улучшить видимость вашего сайта в
								поисковых системах.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceSection
