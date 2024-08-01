import { Suspense, useEffect, useState } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import Stars from '../ui/Stars'
import Earth from './Earth'

const ContactSection = () => {
	const [isEarthVisible, setIsEarthVisible] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsEarthVisible(true)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div
			id='contacts' // Убедитесь, что id установлен
			className='bg-white text-black dark:bg-black dark:text-white m-auto min-h-screen w-screen relative flex justify-center items-center font-rubik-mono'
		>
			<Stars />
			<div className='m-auto p-4'>
				<div className='max-w-6xl m-auto flex items-center gap-4 justify-between flex-col-reverse lg:flex-row'>
					<section className='rounded-[50px] bg-indigo-400 dark:bg-gray-900'>
						<ContactForm />
					</section>
					{isEarthVisible && (
						<Suspense fallback={<div>Loading...</div>}>
							<div className='w-full !h-[350px] lg:!w-1/2 lg:!h-[500px] relative'>
								<Earth />
							</div>
						</Suspense>
					)}
				</div>
			</div>
		</div>
	)
}

export default ContactSection
