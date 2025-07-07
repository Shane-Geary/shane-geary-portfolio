import Image from 'next/legacy/image'

import FlatironCertificate from '../../../public/shane-flatiron-certificate.png'

export const FlatironCertImage = () => {
	return (
		<Image
			alt='Flatiron Certificate'
			src={FlatironCertificate}
			// width={100}
			// height={100}
			layout='responsive'
		/>
	)
}
