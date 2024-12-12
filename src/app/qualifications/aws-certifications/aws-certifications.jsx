import Image from 'next/legacy/image'
import styles from './aws-certs.module.scss'

import AWSCCPCert from '../../../../public/aws-certified-cloud-practitioner.png'

export default function AWSCerts() {
	return (
		<div className={styles['awsContainer']}>
			{/* <div className={styles['awsTextSectionWrapper']}> */}
			<div className={styles['awsTextSection']}>
				<div className={styles['awsCCPContainer']}>
					<Image
						alt='AWS Certified Cloud Practitioner'
						src={AWSCCPCert}
						layout='responsive'
					/>
				</div>
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
				Verify Here
			</div>
			{/* </div> */}
		</div>
	)
}
