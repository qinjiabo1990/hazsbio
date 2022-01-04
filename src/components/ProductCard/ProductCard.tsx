import React from 'react'
import styles from './ProductCard.module.css'
import { Button } from 'antd';

import cow from '../../assets/img/cow.png'
import { Link } from 'react-router-dom';

export const ProductCard : React.FC = () => {
	return (
	<div className={styles.productCard}>
		<img className={styles.cardImg} src={cow} alt="cow" />
		<h3 className={styles.cardTitle}>奶牛添加剂</h3>
		<Link to='products'>
		<Button type="primary" shape="round" size={'large'}>
			查看更多
    </Button>
		</Link>
	</div>)
}