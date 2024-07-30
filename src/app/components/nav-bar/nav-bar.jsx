import Image from 'next/image'
import styles from './nav-bar.module.scss'

import classNames from 'classnames'

import logoSrc from '../../../../public/gearz.JPG'

export const NavBar = () => {
	return (
		<header className={styles['navbar']}>
			<div className={styles['navbarContainer']}>
				<div className={styles['logo']}>
					<Image
						src={logoSrc}
						alt='Shane AI'
						priority={true}
						width={75}
						height={75}
						style={{borderRadius: '40px'}}
					/>
				</div>
				<button className={styles['hamburgerIcon']}>
					<span className={styles['hamburgerLine']} />
					<span className={styles['hamburgerLine']} />
					<span className={styles['hamburgerLine']} />
				</button>
				<nav className={styles['navLinks']}>
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
