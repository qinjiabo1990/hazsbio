import React from 'react'
import styles from './MainLayout.module.css'
import { Header, Footer } from '../../components'

export const MainLayout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	)
}