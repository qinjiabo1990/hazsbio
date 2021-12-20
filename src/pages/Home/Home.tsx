import React from 'react'
import { Footer, Header, Carousel, ProductCard } from '../../components'
import styles from './Home.module.css'

export const Home: React.FC = () => {
	return (<>
		<Header />
		<Carousel />
		<div className={styles.product}>
			<h2>我们的产品</h2>
			<div className={styles.productCard}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
		<Footer />
	</>)
}