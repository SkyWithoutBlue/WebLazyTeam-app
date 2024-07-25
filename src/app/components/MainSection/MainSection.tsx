import Image from 'next/image'
import { Button } from '../ui/moving-border'
const MainSection = () => {
	return (
		<section className='flex max-w-7xl m-auto px-4'>
			<div className='flex flex-col lg:flex-row lg:justify-between min-h-screen w-screen items-center'>
				<div className='flex flex-col gap-8 mt-8 items-center sm:items-start lg:w-1/2'>
					<h1 className='text-3xl text-white sm:text-4xl md:text-5xl'>
						Создаем уникальные веб-сайты,которые работают на вас!
					</h1>
					<h2 className='text-xl text-[#FBF080] sm:text-2xl md:text-3xl '>
						Профессиональная разработка сайтов, адаптированных под ваши нужды
					</h2>
					<Button
						borderRadius='1.75rem'
						className='bg-transparent dark:bg-slate-900 border-2 text-white dark:text-white border-[#add7ff] dark:border-slate-800 hover:border-sky-100 hover:transition-colors hover:duration-400'
					>
						Заказать
					</Button>
				</div>
				<div className='relative m-2'>
					<Image
						className='object-fit m-auto pointer-events-none h-full'
						src='/hero.svg'
						width={563}
						height={579}
						alt=''
						priority
					/>
				</div>
			</div>
		</section>
	)
}

export default MainSection
