import styles from './loading-skeleton.module.scss'

export default function LoadingSkeleton() {
	return (
		<div className={styles['skeletonContainer']}>
			<div className={styles['skeleton']}>
				<div className={styles['skeletonTitle']}></div>
				<div className={styles['skeletonBody']}>
					<div className={styles['skeletonImage']}></div>
					<div className={styles['skeletonText']}>
						{Array(10)
							.fill(0)
							.map((_, index) => (
								<div key={index} className={styles['skeletonLine']}></div>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}
