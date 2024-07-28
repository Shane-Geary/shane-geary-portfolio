import styles from './about-me.module.scss'

export const AboutMe = () => {
	return (
		<div className={styles['aboutMeSection']}>
			<h2 className={styles['aboutMeTitle']}>About Me</h2>
			<div className={styles['aboutMeText']}>
				Software Engineer experienced in ReactJS/NextJS/Typescript, HTML, CSS
				and other frontend languages and technologies. Also experienced in and
				geared towards cloud computing and IT, specializing in AWS.
			</div>
		</div>
	)
}
