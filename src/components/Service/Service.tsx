import React from 'react'
import styles from './Service.module.css'

export const Service : React.FC = () => {
	return (
	<div className={styles.serviceCard}>
		<h2 className={styles.serviceTitle}>服务一</h2>
		<ul className={styles.serviceFeatures}>
			<li>特色1</li>
			<li>特色2</li>
		</ul>
	</div>)
}