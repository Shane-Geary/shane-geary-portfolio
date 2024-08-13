import Image from 'next/legacy/image'
import Link from 'next/link'

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
					<Link
						className={styles['text']}
						href={'https://www.linkedin.com/in/shanegeary/'}
						target='_blank'
					>
						LinkedIn
					</Link>
				</div>
				<div className={styles['circleTwo']}>
					<div className={styles['iconWrapper']}>
						<Image alt='GitHub' src='/github-sign.png' layout='fill' />
					</div>
					<Link
						className={styles['text']}
						href={'https://github.com/Shane-Geary'}
						target='_blank'
					>
						Github
					</Link>
				</div>
				<div className={styles['circleThree']}>
					<div className={styles['iconWrapper']}>
						<Image alt='UpWork' src='/upwork.png' layout='fill' />
					</div>
					<Link
						className={styles['text']}
						href={
							'https://www.upwork.com/freelancers/~01215676e614c48b8a?mp_source=share'
						}
						target='_blank'
					>
						UpWork
					</Link>
				</div>
				<div className={styles['circleFour']}>
					<div className={styles['iconWrapper']}>
						<Image alt='Gmail' src='/email.png' layout='fill' />
					</div>
					<Link
						className={styles['text']}
						href='mailto:shanegeary1994@gmail.com?subject=Inquiry&body=Hi%20Shane,%0D%0A%0D%0A'
						target='_blank'
					>
						Gmail
					</Link>
				</div>
			</div>
		</div>
	)
}
