import styles from './aws-certs.module.scss'

export default function AWSCerts() {
	return (
		<div className={styles['awsContainer']}>
			<div className={styles['awsTextSection']}>
				<div className={styles['awsText']}>
					"Earners of this certification have a fundamental understanding of IT
					services and their uses in the AWS Cloud. They demonstrated cloud
					fluency and foundational AWS knowledge. Badge owners are able to
					identify essential AWS services necessary to set up AWS-focused
					projects."
				</div>
			</div>
			<div className={styles['awsIframeContainer']}>
				<iframe
					src='/AWSCCP.pdf#view=FitH'
					width='actual-width.px'
					height='actual-height.px'
				/>
			</div>
		</div>
	)
}
