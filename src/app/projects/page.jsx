'use client'
import {useState, useRef} from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

import GlowstikFontLogo from '../../../public/Glowstik_Logo_Door.svg'
import GlowstikLogo from '../../../public/Glowstik_Logo.svg'

import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './projects.module.scss'

export default function Projects() {
	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)

	return (
		<div className={styles['projectsContainer']}>
			<Swiper
				style={{height: '100%', position: 'relative'}}
				modules={[Navigation]}
				direction='vertical'
				autoplay={false}
				spaceBetween={10}
				slidesPerView={1}
				speed={500}
				navigation={{
					nextEl: '#swiperButtonNextID',
					prevEl: '#swiperButtonPrevID'
				}}
				// TODO - Navigation/Pagination disabled until additional projects are added
				allowSlideNext={false}
				allowSlidePrev={false}
				allowTouchMove={false}
			>
				<SwiperSlide className={styles['glowstikSlide']}>
					<div className={styles['glowstikProjectContainer']}>
						<div className={styles['projectsTitleContainer']}>
							<div className={styles['projectsTitleWrapper']}>Projects</div>
						</div>
						<div className={styles['glowstikContentContainer']}>
							<div className={styles['logoPositionContainer']}>
								<div className={styles['glowstikFontLogoWrapper']}>
									<Image
										alt='Glowstik Font Logo'
										src={GlowstikFontLogo}
										// width={1100}
										// height={260}
										layout='responsive'
									/>
								</div>
								<div className={styles['glowstikURLContainer']}>
									<Link
										className={styles['glowstikUrlWrapper']}
										href={'https://www.glowstik.com/'}
										target='_blank'
									>
										https://www.glowstik.com/
									</Link>
								</div>
							</div>
							<div className={styles['glowstikTextSection']}>
								<div className={styles['glowstikTextContainer']}>
									<div className={styles['glowstikLogoWrapper']}>
										<Image
											alt='Glowstik Logo'
											src={GlowstikLogo}
											width={1024}
											height={1024}
											layout='responsive'
										/>
									</div>
									<div className={styles['glowstikText']}>
										Glowstiks patented technology cloaks your location and
										doesn’t share personal information. As a result, all the
										opportunities are matched and shown on a map so people can
										go to areas of opportunity. People can safely broadcast
										messages in real-time to other people in their area, so they
										can find anything, sell anything, meet anyone or share
										anything.
									</div>
								</div>
								<div className={styles['projectTitleWrapper']}>
									Software Engineer - Founding Team
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				{/* <SwiperSlide>YO</SwiperSlide> */}
				<div
					ref={prevArrowRef}
					id='swiperButtonPrevID'
					className={styles['swiperButtonPrev']}
				/>
				<div
					ref={nextArrowRef}
					id='swiperButtonNextID'
					className={styles['swiperButtonNext']}
				/>
			</Swiper>
		</div>
	)
}
