'use client'
import {useRef, useEffect} from 'react'
import {useSearchParams} from 'next/navigation'
import Image from 'next/legacy/image'

import SlidesContainer from '@/components/slides-container/slides-container'
import Flatiron from './flatiron/page'
import AWSCerts from './aws-certifications/page'

import styles from './skills.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Skills() {
	const searchParams = useSearchParams()

	const slideRoutes = ['flatiron', 'aws-certifications']

	const initialSlideIndex = slideRoutes.indexOf(searchParams.get('section'))
	console.log('initialSlideIndex', initialSlideIndex)

	return (
		<div className={styles['skillsWrapper']}>
			<div className={styles['skillsTitleWrapper']}>Skills</div>
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
				<Flatiron />
				<AWSCerts />
			</SlidesContainer>
		</div>
	)
}
