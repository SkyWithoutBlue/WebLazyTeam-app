import { underlineAnimation } from '@/app/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import AnimatedHeading from '../AnimatedHeading/AnimatedHeading'
import { PinContainer } from '../ui/3d-pin'
const PortfolioSection = () => {
	const pathName = usePathname()
	return (
		<div
			id='portfolio'
			className='bg-white text-black dark:bg-black dark:text-white'
		>
			<div className='max-w-6xl m-auto p-4 relative flex flex-col justify-center'>
				<div>
					<AnimatedHeading text='Портфолио' />
					<motion.div
						initial='hidden'
						whileInView='visible'
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						variants={underlineAnimation}
						className=' w-full h-1 bg-red-300 my-4 max-w-6xl'
					/>

					<div className='flex flex-col lg:flex-row gap-[5rem] lg:gap-[unset] my-8 sm:my-16 justify-between items-center lg:h-screen'>
						<div className='w-full flex items-center justify-center'>
							<PinContainer
								title='ССЫЛКА НА САЙТ'
								href='https://www.google.ru/'
							>
								<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] sm:w-[18rem]'>
									<h3 className='max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100 font-rubik-mono'>
										Проект 1:
									</h3>
									<div className='text-base !m-0 !p-0 font-normal'>
										<span className='text-slate-500 font-rubik'>
											Корпоративный сайт для компании XYZ.
										</span>
									</div>
									<div className='relative w-full h-48 mt-4'>
										<Image
											src='/Example_1.png'
											alt=''
											layout='fill'
											className='rounded-lg'
										/>
									</div>
								</div>
							</PinContainer>
						</div>
						<div className='w-full flex items-center justify-center'>
							<PinContainer
								title='ССЫЛКА НА САЙТ'
								href='https://www.google.ru/'
							>
								<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] sm:w-[18rem]'>
									<h3 className='max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100 font-rubik-mono'>
										Проект 2:
									</h3>
									<div className='text-base !m-0 !p-0 font-normal'>
										<span className='text-slate-500 font-rubik'>
											Интернет-магазин для бренда ABC.
										</span>
									</div>
									<div className='relative w-full h-48 mt-4'>
										<Image
											src='/Example_2.png'
											alt=''
											layout='fill'
											className='rounded-lg'
										/>
									</div>
								</div>
							</PinContainer>
						</div>
						<div className='w-full flex items-center justify-center'>
							<PinContainer
								title='ССЫЛКА НА САЙТ'
								href='https://www.google.ru/'
							>
								<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] sm:w-[18rem] '>
									<h3 className='max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100 font-rubik-mono'>
										Проект 3:
									</h3>
									<div className='text-base !m-0 !p-0 font-normal'>
										<span className='text-slate-500 font-rubik'>
											Лендинг для революционного стартапа DEF.
										</span>
									</div>
									<div className='relative w-full h-48 mt-4'>
										<Image
											src='/Example_3.png'
											alt=''
											layout='fill'
											className='rounded-lg'
										/>
									</div>
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
