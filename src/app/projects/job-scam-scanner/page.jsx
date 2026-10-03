'use client'

import Image from 'next/legacy/image'
import Link from 'next/link'

import styles from './job-scam-scanner.module.scss'

export default function ScamScannerProject() {
	return (
		<div className={styles['scamScannerProjectContainer']}>
			<div className={styles['scamScannerContentContainer']}>
				<div className={styles['videoPositionContainer']}>
					<div className={styles['scamScannerTitleContainer']}>
						<div className={styles['aboutMeTitle']}>Job Scam Scanner</div>
					</div>
					<div className={styles['scamScannerFontLogoWrapper']}>
						<video
							muted
							width='100%'
							height='100%'
							poster='/ScamScanner-Thumbnail.png'
							autoPlay
							playsInline
							loop
							className={styles['scamScannerVideoElement']}
						>
							<source
								src='/ScamScanner-Portfolio-Demo-Privacy.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
				</div>
				<div className={styles['scamScannerTextSection']}>
					<div className={styles['scamScannerTextContainer']}>
						<div className={styles['scamScannerText']}>
							Job Scam Scanner is a Chrome extension designed to help job
							seekers recognize potential scam warning signs before applying. It
							lets users scan a job posting directly in their browser and review
							a risk assessment without interrupting their search.
							<br />
							<br />
							Inspired by the uncertainty I’ve encountered during my own job
							search, I’m building this tool to make evaluating listings easier
							and help applicants make more informed decisions about where to
							invest their time and share their information.
							<br />
							<br />
							Currently in development, with a working prototype supporting
							LinkedIn job postings.
						</div>
					</div>
					{/* <div className={styles['projectTitleWrapper']}>
						Software Engineer - Founding Team
					</div> */}
				</div>
			</div>
		</div>
	)
}
