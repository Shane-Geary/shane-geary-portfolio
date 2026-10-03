'use client'
import {useState, useRef} from 'react'
import {useSearchParams} from 'next/navigation'

import SlidesContainer from '@/components/slides-container/slides-container'
import GlowstikProject from './glowstik/page'
import ScamScannerProject from './job-scam-scanner/page'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './projects.module.scss'

export default function Projects() {
	const nextArrowRef = useRef(null)
	const prevArrowRef = useRef(null)

	const searchParams = useSearchParams()

	const slideRoutes = ['glowstik', 'scam-scanner']

	const initialSlideIndex = slideRoutes.indexOf(searchParams.get('section'))

	return (
		<div className={styles['projectsContainer']}>
			<div className={styles['projectsTitleWrapper']}>Projects</div>
			<SlidesContainer
				swiperProps={{
					style: {height: '100%', position: 'relative'},
					initialSlide: initialSlideIndex,
					onSlideChange: (e) => {
						window.history.pushState(
							{},
							'',
							`?section=${slideRoutes[e.activeIndex]}`
						)
					}
				}}
			>
				<GlowstikProject />
				<ScamScannerProject />
			</SlidesContainer>
		</div>
	)
}
