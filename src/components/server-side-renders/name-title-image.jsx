import Image from 'next/legacy/image'

import nameTitleImage from '../../../public/name-title.png'

export const NameTitleImage = () => {
	return <Image alt='Shane T Geary' src={nameTitleImage} layout='responsive' />
}
