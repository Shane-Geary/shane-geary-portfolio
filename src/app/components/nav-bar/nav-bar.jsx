'use client'
import {useState} from 'react'

import Image from 'next/image'
import styles from './nav-bar.module.scss'

import classNames from 'classnames'

import logoSrc from '../../../../public/gearz.JPG'

export const NavBar = () => {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

	return (
		<header className={styles['navbar']}>
			<div className={styles['navbarContainer']}>
				<div className={styles['logo']}>
					<Image
						src={logoSrc}
						alt='Shane AI'
						priority={true}
						layout='fill'
						objectFit='contain'
						style={{borderRadius: '50%'}}
					/>
				</div>
				<button
					className={classNames(styles['hamburgerIcon'], {
						[styles['hamburgerIconOpen']]: isHamburgerOpen
					})}
					onClick={() => {
						setIsHamburgerOpen(!isHamburgerOpen)
					}}
				>
					{Array.from({length: 3}).map((_, index) => (
						<span key={index} className={styles['hamburgerLine']} />
					))}
				</button>
				<nav
					className={classNames(styles['navLinks'], {
						[styles['navLinksOpen']]: isHamburgerOpen
					})}
				>
					<a href='#home'>Home</a>
					{/* <a href='#about'>About</a> */}
					<a href='#skills'>Skills</a>
					<a href='#projects'>Projects</a>
					{/* <a href='#blog'>Blog</a> */}
					<a href='#contact'>Contact</a>
				</nav>
			</div>
		</header>
	)
}
