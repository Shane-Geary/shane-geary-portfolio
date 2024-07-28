'use client'
import {useState} from 'react'

import classNames from 'classnames'

import styles from './home-page.module.scss'

export const HomePage = () => {
	const [downloadButtonClicked, setDownloadButtonClicked] = useState(false)

	return (
		<div className={styles['heroSection']}>
			<div className={styles['heroLeft']}>
				<h1 className={styles['heroTitle']}>
					Shane T<br /> Geary
				</h1>
			</div>
			<div className={styles['heroRight']}>
				<div className={styles['buttonContainer']}>
					<button
						className={styles['downloadButton']}
						onMouseUp={() => {
							setDownloadButtonClicked(true)
						}}
					>
						<span>
							<div className={styles['downloadIcon']}>
								<div
									className={classNames(styles['arrow'], {
										[styles['clicked']]: downloadButtonClicked
									})}
								/>
								<div
									className={classNames(styles['line'], {
										[styles['clicked']]: downloadButtonClicked
									})}
								/>
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
			</div>
		</div>
	)
}
