import Lottie from 'lottie-react'
import { Button } from '../ui/moving-border'
import animationData from './Lottie.json'

const MainSection = () => {
	return (
		<section className='flex max-w-7xl m-auto px-4'>
			<div className='flex flex-col lg:flex-row lg:justify-between min-h-screen w-screen items-center'>
				<div className='flex flex-col gap-8 mt-8 items-center sm:items-start lg:w-1/2'>
					<h1 className='text-3xl text-white sm:text-4xl md:text-5xl sm:my-6'>
						Создаем уникальные веб-сайты,которые работают на вас!
					</h1>
					<h2 className='text-xl text-[#FBF080] sm:text-2xl md:text-3xl '>
						Профессиональная разработка сайтов, адаптированных под ваши нужды
					</h2>
					<Button
						borderRadius='1.75rem'
						className='bg-indigo-400 dark:bg-slate-900 border-2 text-white dark:text-white border-[#add7ff] dark:border-slate-800 hover:border-sky-100 hover:transition-colors hover:duration-400'
					>
						Заказать
					</Button>
				</div>
				<div className='relative m-2 lg:w-1/2'>
					<Lottie animationData={animationData} loop={true} />
				</div>
			</div>
		</section>
	)
}

export default MainSection
