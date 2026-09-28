'use client'
import {useState, useRef} from 'react'
import {useSearchParams} from 'next/navigation'

import SlidesContainer from '@/components/slides-container/slides-container'
import GlowstikProject from './glowstik/page'

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
							window.history.pushState(
								{},
								'',
								`?section=${slideRoutes[e.activeIndex]}`
							)
						} else {
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
