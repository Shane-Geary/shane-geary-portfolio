import {Inter} from 'next/font/google'
import './globals.scss'

const inter = Inter({subsets: ['latin']})

export const metadata = {
	title: 'Shane Geary',
	description: "Shane T Geary's personal website"
}

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
