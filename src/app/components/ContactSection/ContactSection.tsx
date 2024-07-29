import ContactForm from '../ContactForm/ContactForm'
import Stars from '../ui/Stars'
import Earth from './Earth'
interface canvas {
	width: number
}
const ContactSection = () => {
	return (
		<div className='bg-white text-black dark:bg-black dark:text-white  m-auto '>
			<div className='m-auto p-4 relative'>
				<Stars />
				<div className='max-w-6xl m-auto flex items-center gap-4 justify-between flex-col-reverse lg:flex-row'>
					<section className='bg-sky-600 rounded-[50px] dark:bg-gray-900'>
						<ContactForm />
					</section>
					<div className='w-[320px] lg:!w-1/2 relative'>
						<Earth />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactSection
