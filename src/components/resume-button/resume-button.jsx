'use client'
import {useState} from 'react'

import classNames from 'classnames'

import styles from './resume-button.module.scss'

export const ResumeButton = () => {
	const [downloadButtonClicked, setDownloadButtonClicked] = useState(false)

	return (
		<div className={styles['buttonContainer']}>
			<button
				className={styles['downloadButton']}
				onClick={() => {
					setDownloadButtonClicked(true)
					const a = document.createElement('a')
					a.href = '/Shane-Geary-Resume.pdf'
					a.download = 'Shane-Geary-Resume.pdf'
					a.click()
					a.remove()
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
		</div>
	)
}
