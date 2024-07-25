import { Rubik } from 'next/font/google'
import Image from 'next/image'
const RubikFont400 = Rubik({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
})
const AboutSection = () => {
	return (
		<div className='bg-white text-black dark:bg-black dark:text-white  m-auto'>
			<div className='flex flex-col max-w-6xl m-auto p-4'>
				<h1 className='flex justify-center items-center m-auto uppercase text-4xl sm:text-5xl'>
					О НАС
				</h1>
				<div className='flex flex-col md:flex-row relative h-full w-full items-center'>
					<Image
						className='w-1/2 pointer-events-none'
						src='/gridImages.svg'
						alt=''
						width={557}
						height={518}
					/>
					<p className='text-1xl sm:text-2xl md:text-3xl md:w-1/2'>
						Мы — команда{' '}
						<span className='text-[#979CF8]'>
							опытных разработчиков и дизайнеров
						</span>
						, поможем вам создать веб-сайт, который не только привлечет
						внимание, но и будет эффективно работать на ваш бизнес. От простых
						лендингов до сложных интернет-магазинов — мы знаем, как сделать ваш
						проект <span className='text-[#979CF8]'> успешным.</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutSection
