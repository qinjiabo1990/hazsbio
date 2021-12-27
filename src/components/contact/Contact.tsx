import React from 'react'
import styles from './Contact.module.css'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
	return (
		<div className={styles.contact}>
			<p className={styles.content}>您有任何产品或饲养方面的咨询，都可以提交给我们，我们将安排专业的顾问与您沟通！</p>
			<Link to='contact'>
				<Button type="primary" shape="round" size={'large'}>
					联系我们
				</Button>
			</Link>
		</div>)
}