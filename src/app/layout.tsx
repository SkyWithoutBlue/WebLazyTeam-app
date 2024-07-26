import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Rubik, Rubik_Mono_One } from 'next/font/google'
import TransitionProvider from './components/TransitionProvider.tsx/TransitionProvider'
import './globals.css'
const rubikMonoOne = Rubik_Mono_One({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-rubikMonoOne',
})
const rubik_init = Rubik({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-rubik-init',
})

export const metadata: Metadata = {
	title: 'WebLazyTeam — аутсорсинг веб-разработки',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			suppressHydrationWarning
			lang='ru'
			className='overflow-x-hidden min-w-[320px]'
		>
			<body className={rubikMonoOne.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<TransitionProvider>{children}</TransitionProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
