import {Inter} from 'next/font/google'
import './globals.scss'

import {NavBar} from '../components/nav-bar/nav-bar'
import styles from './page.module.scss'

import {Analytics} from '@vercel/analytics/react'

const inter = Inter({subsets: ['latin']})

export const metadata = {
	title: 'Shane Geary',
	description: "Shane T Geary's personal website"
}

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NavBar />
				<main className={styles['mainWrapper']}>
					<div className={styles['pageContent']}>
						<div className={styles['sizzleBorder']} />
						{children}
					</div>
				</main>
			</body>
		</html>
	)
}
