'use client'
import {useState} from 'react'

import Link from 'next/link'
import Image from 'next/legacy/image'
import styles from './nav-bar.module.scss'

import classNames from 'classnames'

import logoSrc from '../../../public/gearz.JPG'

export const NavBar = () => {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

	const navArray = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Qualifications',
			href: {pathname: '/qualifications', query: {section: 'flatiron'}}
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	]

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
					onClick={(event) => {
						setIsHamburgerOpen(false)

						for (let navItem of navArray) {
							if (event.target.innerText !== navItem.name) {
								event.target.parentElement.children[
									navArray.indexOf(navItem)
								].style.color = 'var(--header-white)'
							} else {
								event.target.style.color = 'var(--header-green)'
							}
						}
					}}
				>
					{navArray.map((navItem, index) => {
						return (
							<Link key={index} href={navItem.href} prefetch>
								{navItem.name}
							</Link>
						)
					})}
				</nav>
			</div>
		</header>
	)
}
