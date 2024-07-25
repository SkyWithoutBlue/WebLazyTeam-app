import Image from 'next/image'
import { Button } from '../ui/moving-border'
const ContactSection = () => {
	return (
		<div className='bg-white text-black dark:bg-black dark:text-white  m-auto '>
			<div className='max-w-6xl m-auto p-4 relative'>
				<div className='flex items-center justify-between flex-col-reverse lg:flex-row'>
					<section className='bg-yellow-200 rounded-[50px] dark:bg-gray-900'>
						<div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
							<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
								Свяжитесь с нами
							</h2>
							<p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
								Получите бесплатную консультацию!
							</p>
							<form action='#' className='space-y-8'>
								<div>
									<label
										htmlFor='tel'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Ваш номер телефона
									</label>
									<input
										type='tel'
										id='tel'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
										placeholder='+7-(123)-(456-78-90)'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='subject'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Как к вам обращаться
									</label>
									<input
										type='text'
										id='subject'
										className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
										placeholder='Ваше имя'
										required
									/>
								</div>
								<div className='sm:col-span-2'>
									<label
										htmlFor='message'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
									>
										Ваше сообщение
									</label>
									<textarea
										id='message'
										className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
										placeholder='Оставьте ваше сообщение...'
									></textarea>
								</div>

								<div className='flex justify-center items-center'>
									<Button
										type='submit'
										borderRadius='1.75rem'
										className='bg-transparent dark:bg-slate-900 border-2 text-white dark:text-white border-[#add7ff] dark:border-slate-800 hover:border-sky-100 hover:transition-colors hover:duration-400 flex items-center justify-center m-auto'
									>
										Заказать
									</Button>
								</div>
							</form>
						</div>
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
