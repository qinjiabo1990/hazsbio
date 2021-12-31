import React from 'react'
import styles from './SearchCard.module.css'
import { Card } from 'antd';
import product_1 from '../../assets/img/1.png'
import { Link } from 'react-router-dom';


const { Meta } = Card;

export const SearchCard: React.FC = () => {
	return (
		<>
		<Link to='productDetails'>
			{/* Image size should be 300 x 300 */}
			<Card
				hoverable
				className={styles.searchCardImg}
				cover={<img alt="product" src={product_1} />}
			>
				<Meta title="助产棒" description="精准饲喂，覆盖全面 – 降低牧场整体成本" />
				<div>
					<div className={styles.searchCategory}>奶牛添加剂</div>
				</div>
			</Card>
		</Link>
		</>
	)
}