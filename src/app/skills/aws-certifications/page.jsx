'use client'
import {useState} from 'react'

import {AwsCcpImage} from '@/components/server-side-renders/aws-ccp-image'

import {Dialog} from '@mui/material'

import styles from './aws-certs.module.scss'

import AWSCCPCert from '../../../../public/aws-certified-cloud-practitioner.png'

export default function AWSCerts() {
	const [imageFullscreen, setImageFullscreen] = useState(false)

	return (
		<div className={styles['awsContainer']}>
			<div className={styles['awsTextSection']}>
				<div
					className={styles['awsCCPContainer']}
					onClick={() => {
						setImageFullscreen(!imageFullscreen)
					}}
				>
					<AwsCcpImage />
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
						className={styles['awsCertImageWrapperFull']}
						onClick={() => {
							setImageFullscreen(!imageFullscreen)
						}}
					>
						<AwsCcpImage />
					</div>
				</Dialog>
				<div className={styles['awsText']}>
					"Earners of this certification have a fundamental understanding of IT
					services and their uses in the AWS Cloud. They demonstrated cloud
					fluency and foundational AWS knowledge. Badge owners are able to
					identify essential AWS services necessary to set up AWS-focused
					projects."
				</div>
			</div>
			<div
				className={styles['verifyWrapper']}
				onClick={() => {
					window.open(
						'https://www.credly.com/badges/b0cae331-62a6-4e80-8cf6-a62d5e2cf9a4/public_url'
					)
				}}
			>
				<span className={styles['verifyText']}>Verify</span> Here
			</div>
		</div>
	)
}
