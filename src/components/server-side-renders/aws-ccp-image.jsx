import Image from 'next/legacy/image'

import AWSCCPCert from '../../../public/aws-certified-cloud-practitioner.png'

export const AwsCcpImage = ({fit = false}) => {
	return (
		<Image
			alt='AWS Certified Cloud Practitioner'
			src={AWSCCPCert}
			layout={fit ? 'fill' : 'responsive'}
			objectFit={fit ? 'contain' : undefined}
		/>
	)
}
