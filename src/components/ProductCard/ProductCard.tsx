import React from 'react'
import styles from './ProductCard.module.css'
import { Button } from 'antd';

import { Link } from 'react-router-dom';

interface ProductCardType {
	cardImg: string;
	productTitle: string;
}

export const ProductCard : React.FC<ProductCardType> = ({cardImg, productTitle}) => {
	return (
	<div className={styles.productCard}>
		<img className={styles.cardImg} src={cardImg} alt="cow" />
		<h3 className={styles.cardTitle}>{productTitle}</h3>
		<Link to='/products'>
		<Button type="primary" shape="round" size={'large'}>
			查看更多
    </Button>
		</Link>
	</div>)
}