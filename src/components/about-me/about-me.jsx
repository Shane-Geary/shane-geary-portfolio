import Image from 'next/image'
import Link from 'next/link'

import headshot from '../../../public/shane-headshot.jpeg'

import styles from './about-me.module.scss'

export const AboutMe = () => {
	return (
		// <div className={styles['aboutMeSection']}>
		<div className={styles['aboutMeContainer']}>
			<h2 className={styles['aboutMeTitle']}>About Me</h2>
			<div className={styles['aboutMePositionWrapper']}>
				<div className={styles['aboutMeTextContainer']}>
					<div className={styles['headshotContainer']}>
						<Image
							src={headshot}
							alt='Shane Headshot'
							// width={580}
							// height={580}
							layout='responsive'
							style={{
								borderRadius: '50%'
							}}
						/>
					</div>
					<div className={styles['aboutMeText']}>
						As a versatile{' '}
						<span className={styles['jobTitle']}>Software Engineer</span> with a
						robust background in both front-end development and cloud
						infrastructure, I excel in dynamic environments that require a blend
						of technical and problem-solving skills. With expertise in HTML,
						CSS, JavaScript, Node.js, React.js, TypeScript, GitHub, and AWS
						(Amazon Web Services), and many more technologies, I bring a
						well-rounded understanding of full-stack development and cloud
						engineering.
						<br />
						<br />
						My journey began with a coding bootcamp and deepened through
						hands-on experience at a startup, where I discovered a passion for
						Information Technology—particularly cloud technologies, system
						administration, and network engineering. Along with my coding
						bootcamp software engineering certification, I also currently hold
						an active{' '}
						<span className={styles['jobTitle']}>
							<Link
								href={{
									pathname: '/skills',
									query: {section: 'aws-certifications'}
								}}
							>
								AWS Certified Cloud Practioner (CCP)
							</Link>
						</span>{' '}
						certification. I initially pursued my degree at Grand Canyon
						University, maintaining a 4.0 GPA, before successfully transferring
						into the competitive{' '}
						<span className={styles['jobTitle']}>Informatics </span>program at
						the University at Albany. I'm now continuing my studies there,
						working toward a B.S. in Informatics with a focus on systems design
						and IT infrastructure.
						{/* My journey began with a coding bootcamp, and through my experience
						at a startup, I developed a passion for{' '}
						<span className={styles['jobTitle']}>Information Technology</span>,
						particularly in AWS cloud services, system administration, and
						network engineering. Now, I’m pursuing my B. S. in Information
						Technology at Grand Canyon University, along with additional AWS
						certifications. I’m eager to apply my technical skills in web
						development and IT while continuing to expand my expertise in
						network administration and cloud infrastructure. */}
						<br />
						{/* <br />
					When I am not coding, I enjoy my love for music, both listening and
					playing. Growing up in a musical family, I learned several instruments
					by the time I was 18. I also found a love for electonic music
					production and sound design. Which crosses over nicely into my love
					for tech. An interesting fact about me, during my younger years, I
					found an interest and affinity for a sub-culture art called "Gloving".
					A dance style that uses LED gloves to create visual effects to music.
					I have performed at many music events and festivals in Colorado, both
					as a solo performer and as part of street teams. */}
					</div>
				</div>
			</div>
		</div>
	)
}
