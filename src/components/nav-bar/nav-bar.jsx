'use client'
import {useState} from 'react'

import Link from 'next/link'
import Image from 'next/legacy/image'
import styles from './nav-bar.module.scss'

import classNames from 'classnames'

import logoSrc from '../../../public/gearz.JPG'

export const NavBar = () => {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

	return (
		<header className={styles['navbar']}>
			<div className={styles['navbarContainer']}>
				<div className={styles['logo']}>
					<Image
						src={logoSrc}
						width={512}
						height={512}
						alt='Shane AI'
						// priority={true}
						layout='responsive'
						// objectFit='contain'
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
					onClick={() => {
						setIsHamburgerOpen(false)
					}}
				>
					<Link href='/'>Home</Link>
					<Link href='/projects'>Projects</Link>
					<Link href='/qualifications'>Qualifications</Link>
					<Link href='/contact'>Contact</Link>
				</nav>
			</div>
		</header>
	)
}
