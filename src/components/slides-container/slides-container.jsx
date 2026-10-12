'use client'
import {useRef, useState, Children} from 'react'

import styles from './slides-container.module.scss'
import classNames from 'classnames'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export default function SlidesContainer({
	children,
	title,
	swiperProps = {},
	slideWrapperStyles = {}
}) {
	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)

	const [activePrevArrowIcon, setActivePrevArrowIcon] = useState(false)
	const [activeNextArrowIcon, setActiveNextArrowIcon] = useState(true)

	const previousArrow = (
		<div
			ref={prevArrowRef}
			id='swiperButtonPrevID'
			className={styles.prevArrowContainer}
		>
			<div
				className={classNames(styles['swiper-button-prev'], {
					[styles['swiper-button-prev-active']]: activePrevArrowIcon
				})}
			/>
		</div>
	)
	const nextArrow = (
		<div
			ref={nextArrowRef}
			id='swiperButtonNextID'
			className={styles.nextArrowContainer}
		>
			<div
				className={classNames(styles['swiper-button-next'], {
					[styles['swiper-button-next-active']]: activeNextArrowIcon
				})}
			/>
		</div>
	)

	const slides = (
		<Swiper
			{...swiperProps}
			modules={[Navigation]}
			direction='vertical'
			autoplay={false}
			spaceBetween={10}
			slidesPerView={1}
			speed={500}
			allowSlideNext
			allowSlidePrev
			allowTouchMove={false}
			navigation={{
				nextEl: '#swiperButtonNextID',
				prevEl: '#swiperButtonPrevID'
			}}
			onSlideChange={(swiper) => {
				setActivePrevArrowIcon(swiper.isBeginning === false)
				setActiveNextArrowIcon(swiper.isEnd === false)

				swiperProps.onSlideChange?.(swiper)
			}}
		>
			{Children.map(children, (child, index) => (
				<SwiperSlide style={slideWrapperStyles} key={index}>
					{child}
				</SwiperSlide>
			))}
			{!title && previousArrow}
			{!title && nextArrow}
		</Swiper>
	)

	return title ? (
		<div className={styles.titledContainer}>
			{previousArrow}
			<div className={styles.title}>{title}</div>
			<div className={styles.content}>{slides}</div>
			{nextArrow}
		</div>
	) : (
		slides
	)
}
