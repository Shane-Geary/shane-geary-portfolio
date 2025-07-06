'use client'
import {useRef, useEffect, Children} from 'react'
import {useSearchParams} from 'next/navigation'

import Flatiron from '@/app/skills/flatiron/page'
import AWSCerts from '@/app/skills/aws-certifications/page'

import styles from './slides-container.module.scss'
import classNames from 'classnames'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export default function SlidesContainer({
	children,
	swiperProps = {},
	slideWrapperStyles = {}
}) {
	console.log(children)
	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)

	return (
		<Swiper
			{...swiperProps}
			modules={[Navigation]}
			direction='vertical'
			autoplay={false}
			spaceBetween={10}
			slidesPerView={1}
			speed={500}
			// initialSlide={initialSlideIndex}
			// style={{height: '100%', position: 'relative'}}
			allowSlideNext
			allowSlidePrev
			allowTouchMove={false}
			navigation={{
				nextEl: '#swiperButtonNextID',
				prevEl: '#swiperButtonPrevID'
			}}
			// enabled
			// onSlideChange={(e) => {
			// 	if (e.activeIndex === 0) {
			// 		// prevArrowRef.current.style.opacity = 0
			// 		// prevArrowRef.current.style.visibility = 'hidden'

			// 		// nextArrowRef.current.style.opacity = 1
			// 		// nextArrowRef.current.style.visibility = 'visible'

			// 		window.history.pushState(
			// 			{},
			// 			'',
			// 			`?section=${slideRoutes[e.activeIndex]}`
			// 		)
			// 	} else {
			// 		// prevArrowRef.current.style.opacity = 1
			// 		// prevArrowRef.current.style.visibility = 'visible'

			// 		// nextArrowRef.current.style.opacity = 0
			// 		// nextArrowRef.current.style.visibility = 'hidden'

			// 		window.history.pushState(
			// 			{},
			// 			'',
			// 			`?section=${slideRoutes[e.activeIndex]}`
			// 		)
			// 	}
			// }}
		>
			{Children.map(children, (child, index) => (
				<SwiperSlide style={slideWrapperStyles} key={index}>
					{child}
				</SwiperSlide>
			))}
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
	)
}
