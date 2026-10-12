import Image from 'next/legacy/image'

import FlatironCertificate from '../../../public/shane-flatiron-certificate.png'

export const FlatironCertImage = ({fit = false}) => {
	return (
		<Image
			alt='Flatiron Certificate'
			src={FlatironCertificate}
			layout={fit ? 'fill' : 'responsive'}
			objectFit={fit ? 'contain' : undefined}
		/>
	)
}
