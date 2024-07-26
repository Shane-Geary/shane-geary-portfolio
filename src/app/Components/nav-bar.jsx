import styles from './nav-bar.module.css'

export const NavBar = () => {
	return (
		<header className={styles['navbar']}>
			<div className={styles['navbar-container']}>
				<div className={styles['logo']}>MyWebsite</div>
				<nav className={styles['nav-links']}>
					<a href='#home'>Home</a>
					<a href='#about'>About</a>
					<a href='#skills'>Skills</a>
					<a href='#projects'>Projects</a>
					<a href='#blog'>Blog</a>
					<a href='#contact'>Contact</a>
				</nav>
			</div>
		</header>
	)
}
