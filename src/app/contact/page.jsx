'use client'
import Image from 'next/legacy/image'

import styles from './contact.module.scss'

export default function Contact() {
	return (
		<div className={styles['contactPageWrapper']}>
			<div className={styles['contactTitleWrapper']}>Get in Touch</div>
			<div className={styles['mediaLinksPositionWrapper']}>
				<div className={styles['mediaLinksContainer']}>
					<div
						className={styles['circleOne']}
						onClick={() => {
							window.open('https://www.linkedin.com/in/shanegeary/')
						}}
					>
						<div className={styles['iconWrapper']}>
							<Image alt='LinkedIn' src='/linkedin.png' layout='fill' />
						</div>
						<div className={styles['text']}>LinkedIn</div>
					</div>
					<div
						className={styles['circleTwo']}
						onClick={() => {
							window.open('https://github.com/Shane-Geary')
						}}
					>
						<div className={styles['iconWrapper']}>
							<Image alt='GitHub' src='/github-sign.png' layout='fill' />
						</div>
						<div className={styles['text']}>Github</div>
					</div>
					<div
						className={styles['circleThree']}
						onClick={() => {
							window.open(
								'https://www.upwork.com/freelancers/~01215676e614c48b8a?mp_source=share'
							)
						}}
					>
						<div className={styles['iconWrapper']}>
							<Image alt='UpWork' src='/upwork.png' layout='fill' />
						</div>
						<div className={styles['text']}>UpWork</div>
					</div>
					<div
						className={styles['circleFour']}
						onClick={() => {
							window.open(
								'mailto:shanegeary1994@gmail.com?subject=Inquiry&body=Hi%20Shane,%0D%0A%0D%0A'
							)
						}}
					>
						<div className={styles['iconWrapper']}>
							<Image alt='Gmail' src='/email.png' layout='fill' />
						</div>
						<div className={styles['text']}>Gmail</div>
					</div>
				</div>
			</div>
		</div>
	)
}
