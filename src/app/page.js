import styles from './page.module.scss'
import {NavBar} from './components/nav-bar'
import {HomePage} from './components/home-page'

export default function Home() {
	return (
		<main className={styles['mainWrapper']}>
			<NavBar />
			<div className={styles['pageContent']}>
				<div className={styles['sizzleBorder']} />
				<HomePage />
			</div>
		</main>
	)
}
