'use client'
import {useState, useRef, useEffect} from 'react'

import SlidesContainer from '@/components/slides-container/slides-container.jsx'
import {ResumeButton} from '../../components/resume-button/resume-button.jsx'
import {AboutMe} from '../../components/about-me/about-me.jsx'

import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper/modules'

import styles from './home-page.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function HomePage() {
	const [viewportWidth, setViewportWidth] = useState(0)

	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)

	useEffect(() => {
		setViewportWidth(window.innerWidth)

		nextArrowRef.current = document.getElementById('swiperButtonNextID')
		prevArrowRef.current = document.getElementById('swiperButtonPrevID')

		// if (viewportWidth <= 480) {
		// 	nextArrowRef.current.style.visibility = 'visible'
		// 	nextArrowRef.current.style.opacity = 1
		// } else {
		// 	nextArrowRef.current.style.visibility = 'hidden'
		// 	nextArrowRef.current.style.opacity = 0
		// }

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
			<SlidesContainer
				swiperProps={{
					style: {height: '100%', position: 'relative'},
					allowSlideNext: viewportWidth <= 480 ? true : false,
					allowSlidePrev: viewportWidth <= 480 ? true : false
					// onSlideChange: (e) => {
					// 	if (e.activeIndex === 0 && viewportWidth <= 480) {
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
					// }
				}}
				slideWrapperStyles={{
					height: viewportWidth <= 480 ? '100dvh !important' : '50% !important'
					// height: '100dvh !important',
					// border: '20px solid red'
				}}
			>
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
				<div className={styles['aboutMeContainer']}>
					<h2 className={styles['aboutMeTitle']}>About Me</h2>
					<div className={styles['aboutMePositionWrapper']}>
						<AboutMe />
					</div>
				</div>
			</SlidesContainer>
			{/* <Swiper
				modules={[Navigation]}
				direction='vertical'
				autoplay={false}
				spaceBetween={10}
				slidesPerView={1}
				speed={500}
				style={{height: '100dvh', position: 'relative'}}
				allowSlideNext={viewportWidth <= 480 ? true : false}
				allowSlidePrev={viewportWidth <= 480 ? true : false}
				allowTouchMove={false}
				navigation={{
					nextEl: '#swiperButtonNextID',
					prevEl: '#swiperButtonPrevID'
				}}
				enabled
				onSlideChange={(e) => {
					if (e.activeIndex === 0 && viewportWidth <= 480) {
						prevArrowRef.current.style.visibility = 'hidden'
						nextArrowRef.current.style.visibility = 'visible'

						prevArrowRef.current.style.opacity = 0
						nextArrowRef.current.style.opacity = 1
					} else {
						prevArrowRef.current.style.visibility = 'visible'
						nextArrowRef.current.style.visibility = 'hidden'

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
				<SwiperSlide className={styles['slideTwoWrapper']}>
					<div className={styles['aboutMeContainer']}>
						<h2 className={styles['aboutMeTitle']}>About Me</h2>
						<div className={styles['aboutMePositionWrapper']}>
							<AboutMe />
						</div>
					</div>
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
			</Swiper> */}
		</div>
	)
}
