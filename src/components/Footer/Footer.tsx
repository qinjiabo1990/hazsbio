import React from 'react'
import weChat from '../../assets/img/weChat.jpeg'
import styles from './Footer.module.css'

export const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<div>
				<p>Copyright © 2021 hazsbio.com All Rights Reserved</p>
				<p>京ICP备 2020047285号-1 | 京公网安备00000000000号</p>
			</div>
			<img className={styles.img} src={weChat} alt="QR Code" />
		</div>
	)
}