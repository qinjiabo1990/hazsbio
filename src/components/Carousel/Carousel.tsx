import React from 'react'
import styles from './Carousel.module.css'
import { Image, Carousel as AntCarousel } from 'antd';

import img_one from '../../assets/img/carousel_1.png'
import img_two from '../../assets/img/carousel_1.png'
import img_three from '../../assets/img/carousel_1.png'

export const Carousel: React.FC = () => {
	const loading = <p>Loading.......</p>

	return (
		<AntCarousel className={styles.contentStyle} autoplay>
			<Image preview={false} src={img_one} alt='Ads' placeholder={loading}></Image>
			<Image preview={false} src={img_two} alt='Ads' placeholder={loading}></Image>
			<Image preview={false} src={img_three} alt='Ads' placeholder={loading}></Image>
		</AntCarousel>
	)
}