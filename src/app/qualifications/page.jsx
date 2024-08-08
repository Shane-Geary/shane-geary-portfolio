import Image from 'next/image'

import styles from './qualifications.module.scss'

import FlatironCertificate from '../../../public/shane-flatiron-certificate.JPG'

export default function Qualifications() {
	return (
		<div className={styles['qualificationsWrapper']}>
			<div className={styles['qualificationsTitleWrapper']}>Qualifications</div>
			<div className={styles['flatironContainer']}>
				<div className={styles['flatironCertImageWrapper']}>
					<Image
						src={FlatironCertificate}
						width={1584}
						height={1224}
						layout='responsive'
					/>
				</div>
			</div>
		</div>
	)
}
