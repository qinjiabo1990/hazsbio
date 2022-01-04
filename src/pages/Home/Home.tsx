import React from 'react'
import { Carousel, ProductCard, Service, Cooperator, Contact } from '../../components'
import styles from './Home.module.css'
import { MainLayout } from '../../layouts/mainLayout';

import cow from '../../assets/img/cow.png'
import fish from '../../assets/img/fish.png'
import cattle from '../../assets/img/cattle.png'


export const Home: React.FC = () => {
	return (
		<MainLayout>
			<Carousel />
			<div className={styles.product}>
				<h2>我们的产品</h2>
				<div className={styles.productsCard}>
					<ProductCard cardImg={cow} productTitle='奶牛添加剂' />
					<ProductCard cardImg={cattle} productTitle='肉牛添加剂' />
					<ProductCard cardImg={fish} productTitle='其他动物添加剂' />
				</div>
			</div>
			<div className={styles.service}>
				<h2>我们的服务</h2>
				<div className={styles.productsCard}>
					<Service />
					<Service />
				</div>
			</div>
			<div className={styles.product}>
				<h2>合作伙伴</h2>
				<Cooperator />
			</div>
			<Contact />
		</MainLayout>)
}