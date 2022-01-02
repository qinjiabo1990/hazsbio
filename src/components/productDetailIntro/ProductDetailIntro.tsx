import React from 'react'
import styles from './ProductDetailIntro.module.css'
import { MainLayout } from '../../layouts/mainLayout';
import { Breadcrumbs } from '../../components';
import product_1 from '../../assets/img/1.png'
import { Link } from 'react-router-dom';

export const ProductDetailIntro: React.FC = () => {
	return (
		<div className={styles.introRow}>
			<img src={product_1} alt="" />
			<div className={styles.introInfo}>
				<h2 className={styles.introTitle}>助产棒</h2>
				<p className={styles.introSubtitle}>精准饲喂，覆盖全面 – 降低牧场整体成本</p>
				<p className={styles.introBrief}>精准饲喂，覆盖全面 – 降低牧场整体成本</p>
				<Link to='/contact'><button className={styles.introButton}>联系我们</button></Link>
			</div>
		</div>)
}