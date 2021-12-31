/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'antd/dist/antd.css';
import styles from './Header.module.css'
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'


export const Header: React.FC = () => {
	return (
		<div className={styles.header}>
			<img className={styles.logoImg} src={Logo} alt="Logo" />
			<div className={styles.menu}>
				<Link to='/hazsbio'>首页</Link>
				<Link to='/products'>产品</Link>
				<Link to='/about'>关于我们</Link>
				<Link to='/contact'>联系我们</Link>
			</div>
		</div>
	)
}