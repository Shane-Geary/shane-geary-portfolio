'use client'

import Image from 'next/legacy/image'
import Link from 'next/link'

import styles from './job-scam-scanner.module.scss'

export default function ScamScannerProject() {
	return (
		<div className={styles['scamScannerProjectContainer']}>
			<div className={styles['scamScannerContentContainer']}>
				<div className={styles['logoPositionContainer']}>
					<div className={styles['scamScannerFontLogoWrapper']}>
						<video
							muted
							width='100%'
							height='100%'
							poster='/ScamScanner-Thumbnail.png'
							autoPlay
							playsInline
							loop
						>
							<source
								src='/ScamScanner-Portfolio-Demo-Privacy.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
					{/* <div className={styles['glowstikURLContainer']}>
						<Link
							className={styles['glowstikUrlWrapper']}
							href={'https://www.glowstik.com/'}
							target='_blank'
						>
							https://www.glowstik.com/
						</Link>
					</div> */}
				</div>
				<div className={styles['scamScannerTextSection']}>
					<div className={styles['scamScannerTextContainer']}>
						{/* <div className={styles['scamScannerLogoWrapper']}>
							<Image
								alt='Glowstik Logo'
								src={GlowstikLogo}
								width={1024}
								height={1024}
								layout='responsive'
							/>
						</div> */}
						{/* <div className={styles['scamScannerText']}>
							Glowstiks patented technology cloaks your location and doesn’t
							share personal information. As a result, all the opportunities are
							matched and shown on a map so people can go to areas of
							opportunity. People can safely broadcast messages in real-time to
							other people in their area, so they can find anything, sell
							anything, meet anyone or share anything.
						</div> */}
					</div>
					{/* <div className={styles['projectTitleWrapper']}>
						Software Engineer - Founding Team
					</div> */}
				</div>
			</div>
		</div>
	)
}
