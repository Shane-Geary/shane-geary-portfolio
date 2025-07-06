'use client'
import {useState} from 'react'
import Image from 'next/legacy/image'

import {Dialog} from '@mui/material'

import classNames from 'classnames'

import styles from './flatiron.module.scss'

import FlatironCertificate from '../../../../public/shane-flatiron-certificate.png'

export default function Flatiron() {
	const [imageFullscreen, setImageFullscreen] = useState(false)

	return (
		<div className={styles['flatironContainer']}>
			<div className={styles['flatironTextSection']}>
				<div
					className={classNames(styles['flatironCertImageWrapper'], {
						[styles['fullscreenImage']]: imageFullscreen
					})}
					onClick={() => {
						setImageFullscreen(!imageFullscreen)
					}}
				>
					<Image
						alt='Flatiron Certificate'
						src={FlatironCertificate}
						// width={100}
						// height={100}
						layout='responsive'
					/>
				</div>
				<div className={styles['flatironText']}>
					Rigorous coding bootcamp where I learned the fundamentals of web
					development languages. Such as HTML, CSS, JavaScript, ReactJS, etc.
				</div>
			</div>
		</div>
	)
}
