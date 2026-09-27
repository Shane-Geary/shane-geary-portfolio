'use client'
// import {useState} from 'react'

import Image from 'next/legacy/image'
import Link from 'next/link'

import GlowstikFontLogo from '../../../../public/Glowstik_Logo_Door.svg'
import GlowstikLogo from '../../../../public/Glowstik_Logo.svg'

import styles from './glowstik.module.scss'

export default function GlowstikProject() {
	return (
		<div className={styles['glowstikProjectContainer']}>
			<div className={styles['glowstikContentContainer']}>
				<div className={styles['logoPositionContainer']}>
					<div className={styles['glowstikFontLogoWrapper']}>
						<Image
							alt='Glowstik Font Logo'
							src={GlowstikFontLogo}
							// width={1100}
							// height={260}
							layout='responsive'
						/>
					</div>
					<div className={styles['glowstikURLContainer']}>
						<Link
							className={styles['glowstikUrlWrapper']}
							href={'https://www.glowstik.com/'}
							target='_blank'
						>
							https://www.glowstik.com/
						</Link>
					</div>
				</div>
				<div className={styles['glowstikTextSection']}>
					<div className={styles['glowstikTextContainer']}>
						<div className={styles['glowstikLogoWrapper']}>
							<Image
								alt='Glowstik Logo'
								src={GlowstikLogo}
								width={1024}
								height={1024}
								layout='responsive'
							/>
						</div>
						<div className={styles['glowstikText']}>
							Glowstiks patented technology cloaks your location and doesn’t
							share personal information. As a result, all the opportunities are
							matched and shown on a map so people can go to areas of
							opportunity. People can safely broadcast messages in real-time to
							other people in their area, so they can find anything, sell
							anything, meet anyone or share anything.
						</div>
					</div>
					<div className={styles['projectTitleWrapper']}>
						Software Engineer - Founding Team
					</div>
				</div>
			</div>
		</div>
	)
}
