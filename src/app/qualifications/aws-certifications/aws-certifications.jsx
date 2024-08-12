import styles from './aws-certs.module.scss'

export default function AWSCerts() {
	return (
		<div className={styles['awsContainer']}>
			<div className={styles['awsTextSection']}>
				<div className={styles['awsText']}>AWS!</div>
			</div>
			<div
				className={styles['awsCertImageWrapper']}
				// onClick={() => {
				// 	setImageFullscreen(!imageFullscreen)
				// }}
			>
				<iframe src='/AWSCCP.pdf' />
			</div>
		</div>
	)
}
