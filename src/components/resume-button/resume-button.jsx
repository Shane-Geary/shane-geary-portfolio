'use client'
import {useState} from 'react'

import classNames from 'classnames'

import styles from './resume-button.module.scss'

export const ResumeButton = () => {
	const [downloadButtonClicked, setDownloadButtonClicked] = useState(false)
	const [downloadButtonHovered, setDownloadButtonHovered] = useState(false)

	const handleButtonClick = () => {
		setDownloadButtonClicked(true)

		const button = document.querySelector(`.${styles['downloadButton']}`)
		button.classList.add(styles['hoverEffect'])

		setTimeout(() => {
			button.classList.remove(styles['hoverEffect'])
			button.classList.remove(styles['hovered'])
			setDownloadButtonHovered(false)
			button.blur()
			setDownloadButtonClicked(false)
		}, 1500)
	}

	const downloadPDF = (timeout) => {
		setTimeout(() => {
			const a = document.createElement('a')
			a.target = '_blank'
			a.href = '/Shane-Geary-Resume.pdf'
			a.download = 'Shane-Geary-Resume.pdf'
			a.click()
			a.remove()
		}, timeout)
	}

	return (
		<div className={styles['buttonContainer']}>
			<button
				className={classNames(styles['downloadButton'], {
					[styles['hovered']]: downloadButtonHovered
				})}
				onMouseEnter={() => {
					setDownloadButtonHovered(true)
				}}
				onMouseLeave={() => {
					setDownloadButtonHovered(false)
				}}
				onMouseDown={() => {
					downloadPDF(0)
				}}
				onTouchStart={(e) => {
					e.preventDefault()
					handleButtonClick()
				}}
				onTouchEnd={(e) => {
					e.preventDefault()
					// Manually remove focus when touch ends
					const button = e.currentTarget
					button.blur()
					setDownloadButtonHovered(false)

					downloadPDF(2000)
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
