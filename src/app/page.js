import Image from 'next/image'
import styles from './page.module.css'
import {NavBar} from './components/nav-bar'
import {HomePage} from './components/home-page'

export default function Home() {
	return (
		<main className={styles['main']}>
			<NavBar />
			<HomePage />
		</main>
	)
}
