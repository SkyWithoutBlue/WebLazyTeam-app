import { underlineAnimation } from '@/app/utils/motion'
import { motion } from 'framer-motion'
import { PinContainer } from '../ui/3d-pin'
const PortfolioSection = () => {
	return (
		<div className='bg-white text-black dark:bg-black dark:text-white  m-auto '>
			<div className='max-w-6xl m-auto p-4 relative h-full'>
				<h1 className='flex justify-center items-center m-auto text-4xl sm:text-5xl uppercase p-4'>
					Портфолио
				</h1>
				<motion.div
					initial='hidden'
					whileInView='visible'
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					variants={underlineAnimation}
					className='w-full h-1 bg-red-300 my-4'
				></motion.div>
				<div>
					<div className='flex flex-col lg:flex-row  gap-[5rem] lg:gap-[unset] my-8 sm:my-16 justify-center'>
						<div className=' w-full flex items-center justify-center'>
							<PinContainer
								title='ССЫЛКА НА САЙТ'
								href='https://www.google.ru/'
							>
								<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] sm:w-[18rem] '>
									<h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
										Проект 1:
									</h3>
									<div className='text-base !m-0 !p-0 font-normal'>
										<span className='text-slate-500 '>
											Корпоративный сайт для компании XYZ.
										</span>
									</div>
									<div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
								</div>
							</PinContainer>
						</div>
						<div className=' w-full flex items-center justify-center '>
							<PinContainer
								title='ССЫЛКА НА САЙТ'
								href='https://www.google.ru/'
							>
								<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] sm:w-[18rem] '>
									<h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
										Проект 2:
									</h3>
									<div className='text-base !m-0 !p-0 font-normal'>
										<span className='text-slate-500 '>
											Интернет-магазин для бренда ABC.
										</span>
									</div>
									<div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
								</div>
							</PinContainer>
						</div>
						<div className=' w-full flex items-center justify-center '>
							<PinContainer
								title='ССЫЛКА НА САЙТ'
								href='https://www.google.ru/'
							>
								<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] sm:w-[18rem] '>
									<h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
										Проект 3:
									</h3>
									<div className='text-base !m-0 !p-0 font-normal'>
										<span className='text-slate-500 '>
											Лендинг для стартапа DEF.
										</span>
									</div>
									<div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
								</div>
							</PinContainer>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioSection
