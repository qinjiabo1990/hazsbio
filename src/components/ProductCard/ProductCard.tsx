import React from 'react'
import styles from './ProductCard.module.css'
import { Button } from 'antd';

import cow from '../../assets/img/cow.png'

export const ProductCard : React.FC = () => {
	return (
	<div className={styles.productCard}>
		<img className={styles.cardImg} src={cow} alt="cow" />
		<h3 className={styles.cardTitle}>奶牛添加剂</h3>
		<Button type="primary" shape="round" size={'middle'}>
			查看更多
    </Button>
	</div>)
}