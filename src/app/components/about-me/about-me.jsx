import styles from './about-me.module.scss'

export const AboutMe = () => {
	return (
		<div className={styles['aboutMeSection']}>
			<h2 className={styles['aboutMeTitle']}>About Me</h2>
			<div className={styles['aboutMeText']}>
				Software Engineer experienced in ReactJS/NextJS/Typescript, HTML, CSS
				and other frontend languages and technologies. Also experienced in and
				geared towards cloud computing and IT, specializing in AWS. With 3 years
				tech startup experience, I have a proven track record of innovative
				software solutions.
				<br />
				<br />
				When I am not coding, I enjoy my love for music, both listening and
				playing. Growing up in a musical family, I had learned several
				instruments by the time I turned 18. I also found a love for electonic
				music production and sound design. Which crosses over nicely into my
				love for tech. An interesting fact about me, during my younder adult
				years, I found an interest and affinity for a sub-culture art called
				"Gloving". This art form is a dance style that uses LED gloves to create
				visual effects to music. I have performed at many music events and
				festivals in Colorado, both as a solo performer and as part of street
				teams.
			</div>
		</div>
	)
}
