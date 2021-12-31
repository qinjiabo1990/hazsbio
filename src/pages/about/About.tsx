import React from 'react'
import { } from '../../components'
import styles from './About.module.css'
import { MainLayout } from '../../layouts/mainLayout';
import feeding from '../../assets/img/about_feeding.png'
import shake from '../../assets/img/shake.png'
import teamwork from '../../assets/img/teamwork.png'

export const About: React.FC = () => {
	return (
		<MainLayout>
			<h2 className={styles.aboutTitle}>关于我们</h2>

			<div className={styles.aboutRow}>
				<img className={styles.aboutImg} src={feeding} alt="feeding" />
				<div className={styles.aboutMid}>
				<h3 className={styles.aboutSubtitle}>我们的愿景</h3>
					<p className={styles.aboutInfoRight}>慧安众生生物科技发展（北京）有限责任公司是中国农大肉牛中心下属中法肉牛研究和发展中心的核心合作企业。慧安众生以引进，消化和吸收国际的生物安全和动物健康理念，技术和相关产品为主攻方向，为提升中国食品安全（尤其是畜牧养殖阶段）水平而不懈奋斗。</p>
				</div>
			</div>

			<div className={styles.aboutRow}>
				<div className={styles.aboutMid}>
					<h3 className={styles.aboutSubtitle}>我们的合作</h3>
					<p className={styles.aboutInfo}>慧安众生与中国农大肉牛中心和中国农业科学院合作，并得到相关国内外知名动物营养和健康人员的大力支持和指导。</p>
				</div>
				<img className={styles.aboutImg} src={shake} alt="feeding" />
			</div>

			<div className={styles.aboutRow}>
				<img className={styles.aboutImg} src={teamwork} alt="feeding" />
				<div className={styles.aboutMid}>
				<h3 className={styles.aboutSubtitle}>我们的团队</h3>
					<p className={styles.aboutInfoRight}>慧安众生核心成员由来自中国农大，中国农科院和海外归国的留学人员共同组成。成员在动物营养和动物健康管理领域耕耘多年，拥有丰富技术和管理经验，既熟悉国内市场的发展方向和行业痛点，又了解国外行业发展新动向的优势和特长。拥有做好对国外畜牧行业的理念，技术和相关产品的引进消化和吸收工作的强大能力。</p>
				</div>
			</div>

		</MainLayout>)
}