'use client'
import {useState, useRef} from 'react'
import Image from 'next/image'

import styles from './qualifications.module.scss'
import classNames from 'classnames'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import FlatironCertificate from '../../../public/shane-flatiron-certificate.png'

export default function Qualifications() {
	const [imageFullscreen, setImageFullscreen] = useState(false)

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
					bulletActiveClass: styles['activeBullet'],
					bulletClass: styles['bullet'],
					clickable: true,
					verticalClass: styles['paginationVertical']
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
					<div className={styles['flatironContainer']}>
						<div className={styles['flatironTextSection']}>
							{/* <div className={styles['flatironTitleWrapper']}>
								Software Engineering Certificate
							</div> */}
							<div className={styles['flatironText']}>
								Rigorous coding bootcamp where I learned the fundamentals of web
								development languages. Such as HTML, CSS, JavaScript, ReactJS,
								etc.
							</div>
						</div>
						<div
							className={classNames(styles['flatironCertImageWrapper'], {
								[styles['fullscreenImage']]: imageFullscreen
							})}
							onClick={() => {
								setImageFullscreen(!imageFullscreen)
							}}
						>
							<Image
								alt='Flatiron Certificate'
								src={FlatironCertificate}
								width={100}
								height={100}
								layout='responsive'
							/>
						</div>
					</div>
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
