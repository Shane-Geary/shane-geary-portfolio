import styles from './home-page.module.css'

export const HomePage = () => {
	return (
		<div className={styles.heroSection}>
			<div className={styles.nameContainer}>
				<h1 className={styles.heroTitle}>Shane T Geary</h1>
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.downloadButton}>Download Resume</button>
			</div>
		</div>
	)
}
