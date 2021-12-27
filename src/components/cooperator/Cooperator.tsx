import React from 'react'
import styles from './Cooperator.module.css'

import bcbc from '../../assets/img/bcbc.png'
import kersia from '../../assets/img/Kersia.png'

export const Cooperator: React.FC = () => {
	return (
		<div className={styles.cooperators}>
			<div className={styles.cooperator}>
				<div className={styles.card}>
					<img src={bcbc} alt="bcbc" />
				</div>
				<div className={styles.card}>
					<p className={styles.content}>由毕业于国内农业院校（中国农大和中国农科院为主）的博士和硕士等高素质人才组成的核心团队；由一批多年从事动物营养和保健事业的海外留学归国人员和在国际知名动保，饲料添加剂企业工作10年以上的中高层技术和管理人员携手组成的海创科技公司</p>
				</div>
			</div>

			<div className={styles.cooperator}>
				<div className={styles.card}>
					<p className={styles.content}>由毕业于国内农业院校（中国农大和中国农科院为主）的博士和硕士等高素质人才组成的核心团队；由一批多年从事动物营养和保健事业的海外留学归国人员和在国际知名动保，饲料添加剂企业工作10年以上的中高层技术和管理人员携手组成的海创科技公司</p>
				</div>
				<div className={styles.card}>

					<img src={kersia} alt="kersia" />
				</div>
			</div>
		</div>)
}