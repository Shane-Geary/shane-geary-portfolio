'use client'
import {useState, useRef} from 'react'
import {useSearchParams} from 'next/navigation'

import SlidesContainer from '@/components/slides-container/slides-container'
import GlowstikProject from './glowstik/page'

import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './projects.module.scss'

export default function Projects() {
	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)

	const searchParams = useSearchParams()

	const slideRoutes = ['glowstik']

	const initialSlideIndex = slideRoutes.indexOf(searchParams.get('section'))
	// console.log('initialSlideIndex', initialSlideIndex)

	return (
		<div className={styles['projectsContainer']}>
			<div className={styles['projectsTitleWrapper']}>Projects</div>
			<SlidesContainer
				swiperProps={{
					style: {height: '100%', position: 'relative'},
					initialSlide: initialSlideIndex,
					onSlideChange: (e) => {
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
					}
				}}
			>
				<GlowstikProject />
				<div style={{color: 'whitesmoke'}}>Hello World</div>
			</SlidesContainer>
		</div>
	)
}
