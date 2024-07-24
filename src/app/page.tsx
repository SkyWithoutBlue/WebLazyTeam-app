'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './components/ui/moving-border'
export default function Home() {
	return (
		<>
			<motion.div
				className='h-[calc(100vh-120px)]'
				initial={{ y: '-200vh' }}
				animate={{ y: '0%' }}
				transition={{ duration: 1 }}
			>
				<div className='flex max-w-6xl m-auto p-4 relative '>
					<div className='flex flex-col lg:flex-row'>
						<div className='flex flex-col gap-8 mt-8 items-center sm:items-start flex-shrink'>
							<h1 className='text-3xl text-white sm:text-4xl md:text-5xl'>
								Создаем уникальные веб-сайты,которые работают на вас!
							</h1>
							<h2 className='text-xl text-[#FBF080] sm:text-2xl md:text-3xl '>
								Профессиональная разработка сайтов, адаптированных под ваши
								нужды
							</h2>
							<Button
								borderRadius='1.75rem'
								className='bg-transparent dark:bg-slate-900 border-2 text-white dark:text-white border-[#add7ff] dark:border-slate-800 hover:border-sky-100 hover:transition-colors hover:duration-400'
							>
								Заказать
							</Button>
						</div>
						<Image
							className='object-fit m-auto pointer-events-none'
							src='/hero.svg'
							width={563}
							height={579}
							alt=''
							priority
						/>
					</div>
				</div>
			</motion.div>
		</>
	)
}
