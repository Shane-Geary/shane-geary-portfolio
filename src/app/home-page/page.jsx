'use client'
import {useState, useRef, useEffect} from 'react'
import Image from 'next/legacy/image'

import {ResumeButton} from '../../components/resume-button/resume-button.jsx'
import {AboutMe} from '../../components/about-me/about-me.jsx'
import headshot from '../../../public/shane-headshot.jpeg'

import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper/modules'
import classNames from 'classnames'

import styles from './home-page.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function HomePage() {
	const [viewportWidth, setViewportWidth] = useState(0)
	const [scrollContainerTouched, setScrollContainerTouched] = useState(false)

	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)
	// const aboutMeContainerRef = useRef(null)

	useEffect(() => {
		setViewportWidth(window.innerWidth)

		if (window.innerWidth <= 480 && prevArrowRef.current.style.opacity === 1) {
			nextArrowRef.current.style.opacity = 1
		}

		const handleResize = () => {
			setViewportWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [viewportWidth])

	return (
		<div className={styles['homePage']}>
			<Swiper
				modules={[Navigation]}
				direction='vertical'
				autoplay={false}
				spaceBetween={10}
				slidesPerView={1}
				navigation
				speed={500}
				style={{height: '100dvh', position: 'relative'}}
				allowSlideNext={viewportWidth <= 480 ? true : false}
				allowSlidePrev={viewportWidth <= 480 ? true : false}
				// allowSlideNext={false}
				// allowSlidePrev={false}
				allowTouchMove={false}
				Navigation={{
					nextEl: `className=${styles['swiper-button-next']}`,
					prevEl: `className=${styles['swiper-button-prev']}`
				}}
				enabled
				onSwiper={() => {
					nextArrowRef.current = document.querySelector('.swiper-button-next')
					prevArrowRef.current = document.querySelector('.swiper-button-prev')

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
				<SwiperSlide className={styles['slideOneWrapper']}>
					<div className={styles['heroSection']}>
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
				<SwiperSlide
					className={classNames(styles['slideTwoWrapper'], {
						[styles['scrollContainerTouched']]: scrollContainerTouched
					})}
				>
					<div className={styles['aboutMeContainer']}>
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
							<AboutMe {...{setScrollContainerTouched}} />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
