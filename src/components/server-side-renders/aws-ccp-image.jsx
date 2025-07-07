import Image from 'next/legacy/image'

import AWSCCPCert from '../../../public/aws-certified-cloud-practitioner.png'

export const AwsCcpImage = () => {
	return (
		<Image
			alt='AWS Certified Cloud Practitioner'
			src={AWSCCPCert}
			layout='responsive'
		/>
	)
}
