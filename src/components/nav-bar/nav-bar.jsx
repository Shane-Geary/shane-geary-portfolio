'use client'
import {useState, useEffect, useRef} from 'react'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import Image from 'next/legacy/image'
import styles from './nav-bar.module.scss'

import classNames from 'classnames'

import logoSrc from '../../../public/gearz.JPG'

export const NavBar = () => {
	const navLinkRef = useRef(null)

	const pathname = usePathname()

	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

	const navArray = [
		{
			name: 'Home',
			href: {pathname: '/'}
		},
		{
			name: 'Projects',
			href: {pathname: '/projects'}
		},
		{
			name: 'Skills',
			href: {pathname: '/skills', query: {section: 'flatiron'}}
		},
		{
			name: 'Contact',
			href: {pathname: '/contact'}
		}
	]

	useEffect(() => {
		for (let navItem of navArray) {
			try {
				if (pathname !== navItem.href.pathname) {
					navLinkRef.current.children[navArray.indexOf(navItem)].style.color =
						'var(--header-white)'
				} else {
					navLinkRef.current.children[navArray.indexOf(navItem)].style.color =
						'var(--header-green)'
				}
			} catch {
				console.log(navLinkRef.current.children[navArray.indexOf(navItem)])
			}
		}
	}, [pathname])

	return (
		<header className={styles['navbar']}>
			<div className={styles['navbarContainer']}>
				<div className={styles['logo']}>
					<Image
						src={logoSrc}
						width={512}
						height={512}
						alt='Shane AI'
						layout='responsive'
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
					ref={navLinkRef}
					className={classNames(styles['navLinks'], {
						[styles['navLinksOpen']]: isHamburgerOpen,
						[styles['active']]: navLinkRef.current
					})}
					onClick={(event) => {
						setIsHamburgerOpen(false)
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
