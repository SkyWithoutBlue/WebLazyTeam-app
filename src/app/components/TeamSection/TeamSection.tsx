import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
	{
		photo: '/',
		role: 'Дизайнер',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,commodi esse distinctio perferendis, obcaecati nam repudiandae reiciendis vitae possimus, adipisci dolore maiores nesciuntanimi? Beatae esse cum reprehenderit cumque vero?',
	},
	{
		photo: '/Member_Designer.png',
		role: 'Дизайнер',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,commodi esse distinctio perferendis, obcaecati nam repudiandae reiciendis vitae possimus, adipisci dolore maiores nesciuntanimi? Beatae esse cum reprehenderit cumque vero?',
	},
	{
		photo: '/Member_Designer.png',
		role: 'Дизайнер',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,commodi esse distinctio perferendis, obcaecati nam repudiandae reiciendis vitae possimus, adipisci dolore maiores nesciuntanimi? Beatae esse cum reprehenderit cumque vero?',
	},
	{
		photo: '/Member_Designer.png',
		role: 'Дизайнер',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,commodi esse distinctio perferendis, obcaecati nam repudiandae reiciendis vitae possimus, adipisci dolore maiores nesciuntanimi? Beatae esse cum reprehenderit cumque vero?',
	},
	{
		photo: '/Member_Designer.png',
		role: 'Дизайнер',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,commodi esse distinctio perferendis, obcaecati nam repudiandae reiciendis vitae possimus, adipisci dolore maiores nesciuntanimi? Beatae esse cum reprehenderit cumque vero?',
	},
]
const testAnimation = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
}
const TeamSection = () => {
	return (
		<div className='bg-white text-black dark:bg-black dark:text-white  m-auto '>
			<div className='max-w-6xl m-auto p-4 relative'>
				<motion.h1 className='flex justify-center items-center m-auto text-4xl sm:text-5xl uppercase'>
					команда
				</motion.h1>
				<div className='flex flex-col gap-7'>
					<div className='flex flex-col gap-10'>
						{teamMembers.map(el => (
							<motion.div
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								variants={testAnimation}
								key={el.role}
							>
								<div className='flex hover:bg-red-300 items-center gap-12 rounded-full'>
									<Image
										src='/Member_Designer.png'
										alt=''
										width={176}
										height={176}
									/>
									<div className='flex flex-col gap-5'>
										<h1 className='text-[#979CF8]'>{el.role}</h1>
										<p>{el.desc}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeamSection
