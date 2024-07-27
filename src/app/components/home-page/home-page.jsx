import Image from 'next/image'

import styles from './home-page.module.css'

export const HomePage = () => {
	return (
		<div className={styles['heroSection']}>
			<div className={styles['heroLeft']}>
				<h1 className={styles['heroTitle']}>
					Shane T<br /> Geary
				</h1>
			</div>
			<div className={styles['heroRight']}>
				<div className={styles['buttonContainer']}>
					<button className={styles['downloadButton']}>
						<span>
							<div className={styles['downloadIcon']}>
								<div className={styles['arrow']}></div>
								<div className={styles['line']}></div>
								<div className={styles['base']}></div>
							</div>
						</span>
						<span>Resume</span>
					</button>
				</div>
			</div>
		</div>
	)
}
