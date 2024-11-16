'use client'
import {useRef, useEffect} from 'react'
import {useSearchParams} from 'next/navigation'
import Image from 'next/legacy/image'

import Flatiron from './flatiron/page'
import AWSCerts from './aws-certifications/aws-certifications'

import styles from './qualifications.module.scss'
import classNames from 'classnames'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Qualifications() {
	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)
	const searchParams = useSearchParams()

	const slideRoutes = ['flatiron', 'aws-certifications']

	const initialSlideIndex = slideRoutes.indexOf(searchParams.get('section'))
	console.log('initialSlideIndex', initialSlideIndex)

	// useEffect(() => {
	// 	nextArrowRef.current = document.getElementById('swiperButtonNextID')
	// 	prevArrowRef.current = document.getElementById('swiperButtonPrevID')

	// 	if (initialSlideIndex === 0) {
	// 		nextArrowRef.current.style.visibility = 'visible'
	// 		nextArrowRef.current.style.opacity = 1

	// 		prevArrowRef.current.style.visibility = 'hidden'
	// 		prevArrowRef.current.style.opacity = 0
	// 	} else {
	// 		nextArrowRef.current.style.visibility = 'hidden'
	// 		nextArrowRef.current.style.opacity = 0

	// 		prevArrowRef.current.style.visibility = 'visible'
	// 		prevArrowRef.current.style.opacity = 1
	// 	}
	// }, [])

	return (
		<div className={styles['qualificationsWrapper']}>
			<div className={styles['qualificationsTitleWrapper']}>Qualifications</div>
			<Swiper
				modules={[Navigation, Pagination]}
				direction='vertical'
				autoplay={false}
				spaceBetween={10}
				slidesPerView={1}
				speed={500}
				initialSlide={initialSlideIndex}
				style={{height: '100dvh', position: 'relative'}}
				allowSlideNext
				allowSlidePrev
				allowTouchMove={false}
				navigation={{
					nextEl: '#swiperButtonNextID',
					prevEl: '#swiperButtonPrevID'
				}}
				pagination={{
					bulletActiveClass: 'activeBullet',
					bulletClass: 'bullet',
					clickable: true,
					verticalClass: 'paginationVertical'
				}}
				enabled
				onSlideChange={(e) => {
					if (e.activeIndex === 0) {
						// prevArrowRef.current.style.opacity = 0
						// prevArrowRef.current.style.visibility = 'hidden'

						// nextArrowRef.current.style.opacity = 1
						// nextArrowRef.current.style.visibility = 'visible'

						window.history.pushState(
							{},
							'',
							`?section=${slideRoutes[e.activeIndex]}`
						)
					} else {
						// prevArrowRef.current.style.opacity = 1
						// prevArrowRef.current.style.visibility = 'visible'

						// nextArrowRef.current.style.opacity = 0
						// nextArrowRef.current.style.visibility = 'hidden'

						window.history.pushState(
							{},
							'',
							`?section=${slideRoutes[e.activeIndex]}`
						)
					}
				}}
			>
				<SwiperSlide className={styles['flatironSlide']}>
					<Flatiron />
				</SwiperSlide>
				<SwiperSlide className={styles['flatironSlide']}>
					<AWSCerts />
				</SwiperSlide>
				<div
					ref={prevArrowRef}
					id='swiperButtonPrevID'
					className={styles['prevArrowContainer']}
				>
					<div className={styles['swiper-button-prev']} />
				</div>
				<div
					ref={nextArrowRef}
					id='swiperButtonNextID'
					className={styles['nextArrowContainer']}
				>
					<div className={styles['swiper-button-next']} />
				</div>
			</Swiper>
		</div>
	)
}
