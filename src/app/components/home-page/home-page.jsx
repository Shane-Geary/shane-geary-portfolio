import Image from 'next/image'

import {ResumeButton} from '../resume-button'
import {AboutMe} from '../about-me'
import headshot from '../../../../public/shane-headshot.jpeg'

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
				<h2 className={styles['aboutMeTitle']}>About Me</h2>
				<div className={styles['headshotPositionWrapper']}>
					<div className={styles['headshotContainer']}>
						<Image
							src={headshot}
							alt='Shane Headshot'
							width={580}
							height={580}
							layout='responsive'
							style={{
								borderRadius: '50%'
							}}
						/>
					</div>
				</div>
				<div className={styles['aboutMePositionWrapper']}>
					<AboutMe />
				</div>
			</div>
		</div>
	)
}
