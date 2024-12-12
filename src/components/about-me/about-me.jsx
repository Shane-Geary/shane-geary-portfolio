import Image from 'next/image'

import headshot from '../../../public/shane-headshot.jpeg'

import styles from './about-me.module.scss'

export const AboutMe = () => {
	return (
		<div className={styles['aboutMeSection']}>
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
					of technical and problem-solving skills. With expertise in HTML, CSS,
					JavaScript, Node.js, React.js, TypeScript, GitHub, and AWS (Amazon Web
					Services), and many more technologies, I bring a well-rounded
					understanding of full-stack development and cloud engineering. My
					journey began with a coding bootcamp, and through my experience at a
					startup, I developed a passion for{' '}
					<span className={styles['jobTitle']}>Information Technology</span>,
					particularly in AWS cloud services, system administration, and network
					engineering. Now, I’m pursuing my B. S. in Information Technology at
					Grand Canyon University, along with additional AWS certifications. I’m
					eager to apply my technical skills in web development and IT while
					continuing to expand my expertise in network administration and cloud
					infrastructure.
					<br />
					<br />
					When I am not coding, I enjoy my love for music, both listening and
					playing. Growing up in a musical family, I learned several instruments
					by the time I was 18. I also found a love for electonic music
					production and sound design. Which crosses over nicely into my love
					for tech. An interesting fact about me, during my younger years, I
					found an interest and affinity for a sub-culture art called "Gloving".
					A dance style that uses LED gloves to create visual effects to music.
					I have performed at many music events and festivals in Colorado, both
					as a solo performer and as part of street teams.
				</div>
			</div>
		</div>
	)
}
