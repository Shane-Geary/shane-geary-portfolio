'use client'
import {useState} from 'react'
import Image from 'next/image'

import {ResumeButton} from '../resume-button'
import {AboutMe} from '../about-me'
import headshot from '../../../../public/shane-headshot.jpeg'

import classNames from 'classnames'

import styles from './home-page.module.scss'

export const HomePage = () => {
	const [toggleSection, setToggleSection] = useState(false)

	return (
		<div className={styles['homePage']}>
			<div
				className={classNames(styles['heroSection'], {
					[styles['heroSectionToggle']]: toggleSection
				})}
			>
				<div className={styles['heroLeft']}>
					<h1 className={styles['heroTitle']}>
						Shane T<br /> Geary
					</h1>
				</div>
				<div className={styles['heroRight']}>
					<ResumeButton />
				</div>
			</div>
			<button
				className={classNames(styles['downArrowIcon'], {
					[styles['downArrowIconOpen']]: toggleSection
				})}
			>
				<span className={styles['downArrowLine1']} />
				<span className={styles['downArrowLine2']} />
				<span className={styles['downArrowLine3']} />
			</button>
			<div
				className={classNames(styles['overlayElement'], {
					[styles['overlayElementToggle']]: toggleSection
				})}
				onClick={() => {
					setToggleSection(!toggleSection)
				}}
			/>
			<div
				className={classNames(styles['aboutMeContainer'], {
					[styles['aboutMeContainerToggle']]: toggleSection
				})}
			>
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
