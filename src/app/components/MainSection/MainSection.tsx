import Image from 'next/image'
import { Button } from '../ui/moving-border'
import Stars from '../ui/Stars'
const MainSection = () => {
	return (
		<section className='flex px-4 relative bg-[radial-gradient(_89.76%_53.41%_at_76.46%_53.61%,_rgb(182,_226,_251)_0%,_rgb(168,_195,_250)_44.49999928474426%,_rgb(151,_156,_248)_100%)] dark:bg-gradient-to-r from-slate-900 to-slate-700 h-full'>
			<Stars />
			<div className=' max-w-7xl m-auto flex flex-col lg:flex-row lg:justify-between w-screen items-center'>
				<div className='flex flex-col gap-8 mt-8 items-center sm:items-start lg:w-1/2 pt-32'>
					<h1 className='text-3xl text-white sm:text-4xl md:text-5xl sm:my-6 font-rubik-mono'>
						Создаем уникальные веб-сайты,которые работают на вас!
					</h1>
					<h2 className='text-xl text-[#FBF080] sm:text-2xl md:text-3xl font-sans font-semibold font-rubik'>
						Профессиональная разработка сайтов, адаптированных под ваши нужды
					</h2>
					<Button
						borderRadius='1.75rem'
						className='bg-indigo-400 dark:bg-slate-900 border-2 text-white dark:text-white border-[#add7ff] dark:border-slate-800 hover:border-sky-100 hover:transition-colors hover:duration-400 dark:hover:border-sky-100'
					>
						Заказать
					</Button>
				</div>
				<div className='relative flex justify-center h-1/2 pointer-events-none'>
					<Image
						className='lg:w-full h-1/2'
						src='/Hero.svg'
						alt=''
						width={400}
						height={200}
					/>
				</div>
			</div>
		</section>
	)
}

export default MainSection
