import Image from 'next/legacy/image'

import nameTitleImage from '../../../public/NameTitleImage.png'

export const NameTitleImage = () => {
	return (
		<Image
			alt='Shane T Geary'
			src={nameTitleImage}
			// width={'100%'}
			// height={100}
			layout='responsive'
		/>
	)
}
