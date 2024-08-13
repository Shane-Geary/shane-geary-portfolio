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
			<div className={styles['projectsTitleWrapper']}>Projects</div>
			<Swiper
				// modules={[Navigation, Pagination]}
				direction='vertical'
				autoplay={false}
				spaceBetween={10}
				slidesPerView={1}
				speed={500}
				style={{height: '100dvh', position: 'relative'}}
				// TODO - Navigation/Pagination disabled until additional projects are added
				allowSlideNext={false}
				allowSlidePrev={false}
				allowTouchMove={false}
				// navigation={{
				// 	nextEl: '#swiperButtonNextID',
				// 	prevEl: '#swiperButtonPrevID'
				// }}
				// pagination={{
				// 	bulletActiveClass: 'activeBullet',
				// 	bulletClass: 'bullet',
				// 	clickable: true,
				// 	verticalClass: styles['customPaginationVertical']
				// }}
				// enabled
				// onSwiper={() => {
				// 	nextArrowRef.current = document.getElementById('swiperButtonNextID')
				// 	prevArrowRef.current = document.getElementById('swiperButtonPrevID')

				// 	nextArrowRef.current.style.visibility = 'visible'
				// 	nextArrowRef.current.style.opacity = 1
				// }}
				// onSlideChange={(e) => {
				// 	if (e.activeIndex === 0) {
				// 		prevArrowRef.current.style.visibility = 'hidden'
				// 		nextArrowRef.current.style.visibility = 'visible'

				// 		prevArrowRef.current.style.opacity = 0
				// 		nextArrowRef.current.style.opacity = 1
				// 	} else {
				// 		prevArrowRef.current.style.visibility = 'visible'
				// 		nextArrowRef.current.style.visibility = 'hidden'

				// 		prevArrowRef.current.style.opacity = 1
				// 		nextArrowRef.current.style.opacity = 0
				// 	}
				// }}
			>
				<SwiperSlide className={styles['glowstikSlide']}>
					<div className={styles['glowstikProjectContainer']}>
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
						</div>
						<div className={styles['glowstikTextSection']}>
							<Link
								className={styles['glowstikUrlWrapper']}
								href={'https://www.glowstik.com/'}
								target='_blank'
							>
								https://www.glowstik.com/
							</Link>
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
									Glowstiks patented technology cloaks your location and doesn’t
									share personal information. As a result, all the opportunities
									are matched and shown on a map so people can go to areas of
									opportunity. People can safely broadcast messages in real-time
									to other people in their area, so they can find anything, sell
									anything, meet anyone or share anything.
								</div>
							</div>
							<div className={styles['projectTitleWrapper']}>
								Software Engineer - Founding Team
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>YO</SwiperSlide>
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
