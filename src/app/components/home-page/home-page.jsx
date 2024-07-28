import {ResumeButton} from '../resume-button'

import styles from './home-page.module.scss'

export const HomePage = () => {
	return (
		<div className={styles['heroSection']}>
			<div className={styles['heroLeft']}>
				<h1 className={styles['heroTitle']}>
					Shane T<br /> Geary
				</h1>
			</div>
			<div className={styles['heroRight']}>
				<ResumeButton />
				{/* <div className={styles['buttonContainer']}>
					<button
						className={styles['downloadButton']}
						onAnimationEnd={() => {
							setDownloadButtonClicked(false)
							console.log('Download button animation ended')
						}}
						onMouseUp={() => {
							setDownloadButtonClicked(true)
							setTimeout(() => {
								setDownloadButtonClicked(false)
							}, 2000)
							console.log('Download button clicked')
						}}
					>
						<span>
							<div className={styles['downloadIcon']}>
								<div className={styles['arrow']} />
								<div className={styles['line']} />
								<div
									className={classNames(styles['base'], {
										[styles['clicked']]: downloadButtonClicked
									})}
								/>
							</div>
						</span>
						<span>Resume</span>
					</button>
				</div> */}
			</div>
		</div>
	)
}
