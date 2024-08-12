'use client'
import {useRef} from 'react'
import Image from 'next/legacy/image'

import Flatiron from './flatiron/page'

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
				style={{height: '100vh', position: 'relative'}}
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
				onSwiper={() => {
					nextArrowRef.current = document.getElementById('swiperButtonNextID')
					prevArrowRef.current = document.getElementById('swiperButtonPrevID')

					prevArrowRef.current.style.transition = 'opacity 0.3s'
					nextArrowRef.current.style.transition = 'opacity 0.3s'

					prevArrowRef.current.style.opacity = 0
				}}
				onSlideChange={(e) => {
					if (e.activeIndex === 0) {
						prevArrowRef.current.style.opacity = 0
						nextArrowRef.current.style.opacity = 1
					} else {
						prevArrowRef.current.style.opacity = 1
						nextArrowRef.current.style.opacity = 0
					}
				}}
			>
				<SwiperSlide className={styles['flatironSlide']}>
					<Flatiron />
				</SwiperSlide>
				<SwiperSlide>
					<div>YO</div>
				</SwiperSlide>
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
