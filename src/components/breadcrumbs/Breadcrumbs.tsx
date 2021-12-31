import React from 'react';
import { Breadcrumb } from 'antd';

export const Breadcrumbs: React.FC = () => {
	return (
		<>
			<Breadcrumb separator=">">
				<Breadcrumb.Item>首页</Breadcrumb.Item>
				<Breadcrumb.Item href="">全部产品</Breadcrumb.Item>
				<Breadcrumb.Item href="">奶牛添加剂</Breadcrumb.Item>
				<Breadcrumb.Item>助产棒</Breadcrumb.Item>
			</Breadcrumb>
		</>
	)
}
