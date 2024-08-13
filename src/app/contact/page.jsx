import Image from 'next/legacy/image'

import styles from './contact.module.scss'

export default function Contact() {
	return (
		<div className={styles['contactPageWrapper']}>
			<div className={styles['contactTitleWrapper']}>Get in Touch</div>
			<div className={styles['mediaLinksContainer']}>
				<div className={styles['circleOne']}>
					<div className={styles['iconWrapper']}>
						<Image alt='LinkedIn' src='/linkedin.png' layout='fill' />
					</div>
					<div className={styles['text']}>LinkedIn</div>
				</div>
				<div className={styles['circleTwo']}>
					<div className={styles['iconWrapper']}>
						<Image alt='GitHub' src='/github-sign.png' layout='fill' />
					</div>
					<div className={styles['text']}>Github</div>
				</div>
				<div className={styles['circleThree']}>
					<div className={styles['iconWrapper']}>
						<Image alt='UpWork' src='/upwork.png' layout='fill' />
					</div>
					<div className={styles['text']}>UpWork</div>
				</div>
				<div className={styles['circleFour']}>
					<div className={styles['iconWrapper']}>
						<Image alt='Gmail' src='/email.png' layout='fill' />
					</div>
					<div className={styles['text']}>Gmail</div>
				</div>
			</div>
		</div>
	)
}
