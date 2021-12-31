import React from 'react'
import styles from './ProductDetails.module.css'
import { MainLayout } from '../../layouts/mainLayout';
import { Row, Col, Spin, DatePicker, Space, Divider, Typography, Anchor, Menu, Button } from 'antd';
import { Breadcrumbs, ProductDetailIntro } from '../../components';

export const ProductDetails: React.FC = () => {
	return (
		<MainLayout>
			<div className={styles.breadcrumbs}>
				<Breadcrumbs />
			</div>
			<ProductDetailIntro />
			<Anchor className={styles.productAnchor}>
				<Menu mode="horizontal">
					<Menu.Item key="1">
						<Anchor.Link href="#features" title="功能与主治"></Anchor.Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Anchor.Link href="#ingredients" title="主要成分"></Anchor.Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Anchor.Link href="#usage" title="用法与用量"></Anchor.Link>
					</Menu.Item>
					<Menu.Item key="4">
						<Anchor.Link href="#notes" title="注意事项"></Anchor.Link>
					</Menu.Item>
					<Menu.Item key="5">
						<Anchor.Link href="#data" title="国外实验数据"></Anchor.Link>
					</Menu.Item>
				</Menu>
			</Anchor>
			{/* Features */}
			<div id="features" className={styles.productContainer}>
				<Divider orientation={'center'}>
					<Typography.Title level={4}>功能与主治</Typography.Title>
				</Divider>
				<div
					// dangerouslySetInnerHTML={{ __html: product.features }}
					style={{ margin: 50 }}
				></div>
			</div>
			{/* Ingredients */}
			<div id="ingredients" className={styles.productContainer}>
				<Divider orientation={'center'}>
					<Typography.Title level={4}>主要成分</Typography.Title>
				</Divider>
				<div
					// dangerouslySetInnerHTML={{ __html: product.features }}
					style={{ margin: 50 }}
				></div>
			</div>
			{/* Usage */}
			<div id="usage" className={styles.productContainer}>
				<Divider orientation={'center'}>
					<Typography.Title level={4}>用法与用量</Typography.Title>
				</Divider>
				<div
					// dangerouslySetInnerHTML={{ __html: product.features }}
					style={{ margin: 50 }}
				></div>
			</div>
			{/* Notes */}
			<div id="notes" className={styles.productContainer}>
				<Divider orientation={'center'}>
					<Typography.Title level={4}>注意事项</Typography.Title>
				</Divider>
				<div
					// dangerouslySetInnerHTML={{ __html: product.features }}
					style={{ margin: 50 }}
				></div>
			</div>
			{/* Data */}
			<div id="data" className={styles.productContainer}>
				<Divider orientation={'center'}>
					<Typography.Title level={4}>国外实验数据</Typography.Title>
				</Divider>
				<div
					// dangerouslySetInnerHTML={{ __html: product.features }}
					style={{ margin: 50 }}
				></div>
			</div>
		</MainLayout>)
}