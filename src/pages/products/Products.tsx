import React from 'react'
import styles from './Products.module.css'
import { MainLayout } from '../../layouts/mainLayout';
import { FilterArea, SearchCard } from '../../components';

export const Products: React.FC = () => {
	return (
		<MainLayout>
			<h2 className={styles.productsTitle}>全部产品</h2>
			<div className={styles.productsResults}>
				<div className={styles.productListContainer}>
					<FilterArea />
				</div>
				<SearchCard />
			</div>
		</MainLayout>)
}