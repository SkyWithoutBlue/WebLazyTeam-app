import Image from 'next/image'
import ContactForm from '../ContactForm/ContactForm'

const ContactSection = () => {
	return (
		<div className='bg-white text-black dark:bg-black dark:text-white  m-auto '>
			<div className='max-w-6xl m-auto p-4 relative'>
				<div className='flex items-center justify-between flex-col-reverse lg:flex-row'>
					<section className='bg-sky-600 rounded-[50px] dark:bg-gray-900'>
						<ContactForm />
					</section>
					<div className='w-1/2 relative'>
						<Image
							className='w-full h-full'
							src='/exampleBall.svg'
							alt=''
							width={668}
							height={668}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactSection
