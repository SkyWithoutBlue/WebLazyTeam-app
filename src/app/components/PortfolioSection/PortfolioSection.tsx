import { underlineAnimation } from '@/app/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PinContainer } from '../ui/3d-pin'

const PortfolioSection = () => {
	return (
		<div
			id='portfolio'
			className='bg-white text-black dark:bg-black dark:text-white'
		>
			<div className='max-w-6xl m-auto p-4 relative flex flex-col justify-center'>
				<div>
					<h1 className='flex justify-center items-center m-auto text-4xl sm:text-5xl uppercase p-4 font-rubik-mono'>
						Портфолио
					</h1>
					<motion.div
						initial='hidden'
						whileInView='visible'
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						variants={underlineAnimation}
						className=' w-full h-1 bg-red-300 my-4 max-w-6xl'
					/>
					<div className='flex flex-col lg:flex-row  gap-[5rem] lg:gap-[unset] my-8 sm:my-16 justify-center'>
						<div className=' w-full flex items-center justify-center'>
							<PinContainer
								title='ССЫЛКА НА САЙТ'
								href='https://www.google.ru/'
							>
								<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] sm:w-[18rem] '>
									<h3 className='max-w-xs !pb-2 !m-0 font-bold  text-xl text-slate-100 font-rubik-mono'>
										Проект 1:
									</h3>
									<div className='text-base !m-0 !p-0 font-normal'>
										<span className='text-slate-500 font-rubik'>
											Корпоративный сайт для компании XYZ.
										</span>
									</div>
									<Image
										src='/Example_1.png'
										alt=''
										width={500}
										height={500}
										className='flex flex-1 w-full rounded-lg mt-4'
									/>
								</div>
							</PinContainer>
						</div>
						<div className=' w-full flex items-center justify-center '>
							<PinContainer
								title='ССЫЛКА НА САЙТ'
								href='https://www.google.ru/'
							>
								<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] sm:w-[18rem] '>
									<h3 className='max-w-xs !pb-2 !m-0 font-bold  text-xl text-slate-100 font-rubik-mono'>
										Проект 2:
									</h3>
									<div className='text-base !m-0 !p-0 font-normal'>
										<span className='text-slate-500 font-rubik'>
											Интернет-магазин для бренда ABC.
										</span>
									</div>
									<Image
										src='/Example_2.png'
										alt=''
										width={500}
										height={500}
										className='flex flex-1 w-full rounded-lg mt-4'
									/>
								</div>
							</PinContainer>
						</div>
						<div className=' w-full flex items-center justify-center '>
							<PinContainer
								title='ССЫЛКА НА САЙТ'
								href='https://www.google.ru/'
							>
								<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] sm:w-[18rem] '>
									<h3 className='max-w-xs !pb-2 !m-0 font-bold  text-xl text-slate-100 font-rubik-mono'>
										Проект 3:
									</h3>
									<div className='text-base !m-0 !p-0 font-normal'>
										<span className='text-slate-500 font-rubik'>
											Лендинг для стартапа DEF.
										</span>
									</div>
									<Image
										src='/Example_3.png'
										alt=''
										width={500}
										height={500}
										className='flex flex-1 w-full rounded-lg mt-4'
									/>
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
