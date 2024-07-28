import {ResumeButton} from '../resume-button'
import {AboutMe} from '../about-me'

import styles from './home-page.module.scss'

export const HomePage = () => {
	return (
		<div className={styles['homePage']}>
			<div className={styles['heroSection']}>
				<div className={styles['heroLeft']}>
					<h1 className={styles['heroTitle']}>
						Shane T<br /> Geary
					</h1>
				</div>
				<div className={styles['heroRight']}>
					<ResumeButton />
				</div>
			</div>
			<div className={styles['aboutMeContainer']}>
				<AboutMe />
			</div>
		</div>
	)
}
