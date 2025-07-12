'use client'
import {useRef, useEffect, useState, Children} from 'react'

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
	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)

	const [activePrevArrowIcon, setActivePrevArrowIcon] = useState(false)
	const [activeNextArrowIcon, setActiveNextArrowIcon] = useState(true)

	return (
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
			onSlideChange={(e) => {
				setActivePrevArrowIcon(e.isBeginning === false)
				setActiveNextArrowIcon(e.isEnd === false)
			}}
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
				<div
					className={classNames(styles['swiper-button-prev'], {
						[styles['swiper-button-prev-active']]: activePrevArrowIcon
					})}
				/>
			</div>
			<div
				ref={nextArrowRef}
				id='swiperButtonNextID'
				className={styles['nextArrowContainer']}
			>
				<div
					className={classNames(styles['swiper-button-next'], {
						[styles['swiper-button-next-active']]: activeNextArrowIcon
					})}
				/>
			</div>
		</Swiper>
	)
}
