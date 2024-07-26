import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
	return (
		<footer className='bg-white shadow dark:bg-gray-900'>
			<div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
				<div className='md:flex md:items-center md:justify-between itemsc flex items-center justify-center'>
					<Link
						href='/'
						className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
					>
						<Image
							src='/logo.svg'
							className=''
							alt='WebLazyTeam Logo'
							width={68}
							height={68}
						/>
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
							WebLazyTeam
						</span>
					</Link>
					<ul className='hidden md:flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
						<li>
							<a href='#' className='hover:underline me-4 md:me-6'>
								О нас
							</a>
						</li>
						<li>
							<a href='#' className='hover:underline me-4 md:me-6'>
								Портфолио
							</a>
						</li>
						<li>
							<a href='#' className='hover:underline me-4 md:me-6'>
								Команда
							</a>
						</li>
						<li>
							<a href='#' className='hover:underline'>
								Контакты
							</a>
						</li>
					</ul>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<span className='flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400 gap-4'>
					© 2024{' '}
					<Link href='/' className='hover:underline'>
						WebLazyTeam
					</Link>
				</span>
			</div>
		</footer>
	)
}

export default Footer
