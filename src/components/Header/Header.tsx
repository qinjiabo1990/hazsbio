/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import styles from './Header.module.css'
import { Layout, Menu, Typography, Input } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'


export const Header: React.FC = () => {
	const history = useHistory();

	return (
		<div className={styles.header}>
			<img className={styles.logoImg} src={Logo} alt="Logo" />
			<div className={styles.menu}>
				<a onClick={() => history.push('')}>首页</a>
				<a onClick={() => history.push('')}>产品</a>
				<a onClick={() => history.push('')}>关于我们</a>
				<a onClick={() => history.push('')}>联系我们</a>
			</div>
		</div>
	)
}