'use client'
import {useState} from 'react'
import Image from 'next/legacy/image'

import {FlatironCertImage} from '@/components/server-side-renders/flatiron-cert-image'

import {Dialog} from '@mui/material'

import styles from './flatiron.module.scss'

export default function Flatiron() {
	const [imageFullscreen, setImageFullscreen] = useState(false)

	return (
		<div className={styles['flatironContainer']}>
			<div className={styles['flatironTextSection']}>
				<div
					className={styles['flatironCertImageWrapper']}
					onClick={() => {
						setImageFullscreen(!imageFullscreen)
					}}
				>
					<FlatironCertImage />
				</div>
				<Dialog
					open={imageFullscreen}
					fullScreen
					classes={{
						paperFullScreen: styles['dialogPaper']
					}}
					onClick={() => {
						setImageFullscreen(!imageFullscreen)
					}}
				>
					<div
						className={styles['flatironCertImageWrapperFull']}
						onClick={() => {
							setImageFullscreen(!imageFullscreen)
						}}
					>
						<FlatironCertImage />
					</div>
				</Dialog>
				<div className={styles['flatironText']}>
					Rigorous coding bootcamp where I learned the fundamentals of web
					development languages. Such as HTML, CSS, JavaScript, ReactJS, etc.
				</div>
			</div>
		</div>
	)
}
