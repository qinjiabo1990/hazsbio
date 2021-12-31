import React from 'react'
import { } from '../../components'
import styles from './Contact.module.css'
import { MainLayout } from '../../layouts/mainLayout';
import { Map, Marker, APILoader, InfoWindow } from '@uiw/react-baidu-map';
import { ImLocation2, ImPhone } from "react-icons/im";
import { RiMessage2Fill } from "react-icons/ri"

export const Contact: React.FC = () => {
	return (
		<MainLayout>
			<h2 className={styles.contactTitle}>联系我们</h2>
			<div className={styles.contactInfo}>
				<div className={styles.info}>
					<div className={styles.infoIcon}>
						<ImPhone className={styles.icon} />
					</div>
					<h3>联系电话</h3>
					<p>010-60801766</p>
				</div>
				<div className={styles.info}>
					<div className={styles.infoIcon}>
						<RiMessage2Fill className={styles.icon} />
					</div>
					<h3>企业邮箱</h3>
					<p>xxx@hazsbio.com</p>
				</div>
				<div className={styles.info}>
					<div className={styles.infoIcon}>
						<ImLocation2 className={styles.icon} />
					</div>
					<h3>公司地址</h3>
					<p>北京市门头沟区莲石湖西路98号院7号楼</p>
				</div>
			</div>
			<div className={styles.map}>
				<APILoader akay="ZFZLa0jcOEWRhoCd0BE9Cix8YD1cOYKH">
					<Map center={{ lng: 116.136683, lat: 39.901502 }} widget={['NavigationControl']} zoom={15} style={{ height: 450 }}>
						<Marker animation={1} title="北京市门头沟区莲石湖西路98号院7号楼" position={{ lng: 116.136683, lat: 39.901502 }} type="simple_red" />
					</Map>
				</APILoader>
			</div>
		</MainLayout>)
}