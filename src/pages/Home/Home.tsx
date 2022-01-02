import React from 'react'
import { Carousel, ProductCard, Service, Cooperator, Contact } from '../../components'
import styles from './Home.module.css'
import { MainLayout } from '../../layouts/mainLayout';

export const Home: React.FC = () => {
	return (
		<MainLayout>
			<Carousel />
			<div className={styles.product}>
				<h2>我们的产品</h2>
				<div className={styles.productsCard}>
					<ProductCard />
					<ProductCard />
					<ProductCard />
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