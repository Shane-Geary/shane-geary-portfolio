import Image from 'next/image'

import GlowstikFontLogo from '../../../public/Glowstik_Logo_Door.svg'
import GlowstikLogo from '../../../public/Glowstik_Logo.svg'

import styles from './projects.module.scss'

export default function Projects() {
	return (
		<div className={styles['projectsContainer']}>
			<div className={styles['logoPositionContainer']}>
				<div className={styles['glowstikFontLogoWrapper']}>
					<Image
						src={GlowstikFontLogo}
						width={1100}
						height={260}
						layout='responsive'
					/>
				</div>
			</div>
			<div className={styles['glowstikTextSection']}>
				<div className={styles['glowstikTextContainer']}>
					<div className={styles['glowstikLogoWrapper']}>
						<Image
							src={GlowstikLogo}
							width={1024}
							height={1024}
							layout='responsive'
						/>
					</div>
					<div className={styles['glowstikText']}>
						Glowstiks patented technology cloaks your location and doesn’t share
						personal information. As a result, all the opportunities are matched
						and shown on a map so people can go to areas of opportunity. People
						can safely broadcast messages in real-time to other people in their
						area, so they can find anything, sell anything, meet anyone or share
						anything.
					</div>
				</div>
			</div>
		</div>
	)
}
