'use client'
import {useState, useRef} from 'react'
import Image from 'next/image'

import {ResumeButton} from '../resume-button'
import {AboutMe} from '../about-me'
import headshot from '../../../../public/shane-headshot.jpeg'

import classNames from 'classnames'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper/modules'

import styles from './home-page.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import next from 'next'

export const HomePage = () => {
	const [toggleSection, setToggleSection] = useState(false)

	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)

	return (
		<div className={styles['homePage']}>
			<Swiper
				modules={[Navigation]}
				direction='vertical'
				autoplay={false}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				style={{height: '100vh', position: 'relative'}}
				// allowSlideNext={false}
				// allowSlidePrev={false}
				Navigation={{
					nextEl: `className=${styles['swiper-button-next']}`,
					prevEl: `className=${styles['swiper-button-prev']}`
				}}
				enabled
				onSwiper={(swiper) => {
					nextArrowRef.current = document.querySelector('.swiper-button-next')
					prevArrowRef.current = document.querySelector('.swiper-button-prev')

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
				<SwiperSlide className={styles['slideOneWrapper']}>
					<div
						className={classNames(styles['heroSection'], {
							[styles['heroSectionToggle']]: toggleSection
						})}
					>
						<div className={styles['heroLeft']}>
							<h1 className={styles['heroTitle']}>
								Shane T<br /> Geary
							</h1>
						</div>
						<div className={styles['heroRight']}>
							<ResumeButton />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles['slideTwoWrapper']}>
					<div
						className={classNames(styles['aboutMeContainer'], {
							[styles['aboutMeContainerToggle']]: toggleSection
						})}
					>
						<h2 className={styles['aboutMeTitle']}>About Me</h2>
						<div className={styles['headshotPositionWrapper']}>
							<div className={styles['headshotContainer']}>
								<Image
									src={headshot}
									alt='Shane Headshot'
									width={580}
									height={580}
									layout='responsive'
									style={{
										borderRadius: '50%'
									}}
								/>
							</div>
						</div>
						<div className={styles['aboutMePositionWrapper']}>
							<AboutMe />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
			<div
				className={
					styles['navigationArrow'] + ' ' + styles['navigationArrowNext']
				}
			/>
			<div
				className={
					styles['navigationArrow'] + ' ' + styles['navigationArrowPrev']
				}
			/>
			{/* <button
				className={classNames(styles['downArrowIcon'], {
					[styles['downArrowIconOpen']]: toggleSection
				})}
			>
				<span className={styles['downArrowLine1']} />
				<span className={styles['downArrowLine2']} />
				<span className={styles['downArrowLine3']} />
			</button>
			<div
				className={classNames(styles['overlayElement'], {
					[styles['overlayElementToggle']]: toggleSection
				})}
				onClick={() => {
					setToggleSection(!toggleSection)
				}}
			/> */}
		</div>
	)
}
