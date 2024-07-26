import { textAnimation, underlineAnimation } from '@/app/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
const teamMembers = [
	{
		photo: '/',
		role: 'Менеджер',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,commodi esse distinctio perferendis, obcaecati nam repudiandae reiciendis vitae possimus?',
	},
	{
		photo: '/Member_Designer.png',
		role: 'Менеджер',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,commodi esse distinctio perferendis, obcaecati nam repudiandae reiciendis vitae possimus?',
	},
	{
		photo: '/Member_Designer.png',
		role: 'Дизайнер',
		desc: 'Создает интерфейсы, которые не только радуют глаз, но и заставляют пользователей чувствовать себя как дома. Даже если они пришли с другого сайта!',
	},
	{
		photo: '/Member_Designer.png',
		role: 'Фронтенд разработчик',
		desc: 'Волшебник, который превращает скучные строки кода в яркие и интерактивные веб-приложения. ',
	},
	{
		photo: '/Member_Designer.png',
		role: 'Бэкенд разработчик',
		desc: 'Бэкендер — это тот человек, который отвечает за то, чтобы ваше приложение не только работало, но и делало это с невероятной скоростью и эффективностью.',
	},
]

const TeamSection = () => {
	return (
		<div className='bg-white text-black dark:bg-black dark:text-white  m-auto '>
			<div className='max-w-6xl m-auto p-4 relative'>
				<motion.h1 className='flex justify-center items-center m-auto text-4xl sm:text-5xl uppercase p-4'>
					команда
				</motion.h1>{' '}
				<motion.div
					initial='hidden'
					whileInView='visible'
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					variants={underlineAnimation}
					className='w-full h-1 bg-red-300 my-4'
				></motion.div>
				<div className='flex flex-col gap-7'>
					<div className='flex flex-col gap-10'>
						{teamMembers.map(el => (
							<motion.div
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={textAnimation}
								key={el.role}
							>
								<div className='flex hover:bg-indigo-600 items-center gap-12 rounded-full'>
									<Image
										className='w-24 sm:w-36 sm:h-36 md:w-44 md:h-44'
										src='/Member_Designer.png'
										alt=''
										width={176}
										height={176}
									/>
									<div className='flex flex-col gap-5'>
										<h1 className='text-[#979CF8] text-[18px]'>{el.role}</h1>
										<p className='text-[14px] sm:text-[18px]'>{el.desc}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
				<motion.div
					initial='hidden'
					whileInView='visible'
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					variants={underlineAnimation}
					className='w-full h-1 bg-red-300 my-4'
				></motion.div>
			</div>
		</div>
	)
}

export default TeamSection
