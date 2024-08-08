'use client'
import {useState} from 'react'
import Image from 'next/image'

import styles from './qualifications.module.scss'
import classNames from 'classnames'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import FlatironCertificate from '../../../public/shane-flatiron-certificate.JPG'

export default function Qualifications() {
	const [imageFullscreen, setImageFullscreen] = useState(false)

	return (
		<div className={styles['qualificationsWrapper']}>
			<div className={styles['qualificationsTitleWrapper']}>Qualifications</div>
			<Swiper
				modules={[Navigation]}
				autoplay={false}
				spaceBetween={10}
				slidesPerView={1}
				navigation
				speed={500}
				style={{height: '100vh', position: 'relative'}}
			>
				<SwiperSlide>
					<div className={styles['flatironContainer']}>
						<div className={styles['flatironTextSection']}>
							<div className={styles['flatironTitleWrapper']}>
								Software Engineering Certificate
							</div>
							<div className={styles['flatironText']}>Flatiron School...</div>
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
								src={FlatironCertificate}
								width={1584}
								height={1224}
								layout='responsive'
							/>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
