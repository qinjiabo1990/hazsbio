import React, { useState } from 'react';
import { Tag } from 'antd';
import styles from "./FilterArea.module.css";

const { CheckableTag } = Tag;

const tagsData = ['奶牛添加剂', '肉牛添加剂', '其他动物添加剂'];

export const FilterTag: React.FC = () => {
	const [selectedTags, setSelectedTags] = useState<Array<string>>([])

	const handleSelectedTags = (tag, checked) => {
		const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
		console.log('You are interested in: ', nextSelectedTags);
		setSelectedTags(nextSelectedTags);
	}

	return (
		<>
			<span className={styles["filterTag-title"]}>添加剂：</span>
			{tagsData.map(tag => (
				<CheckableTag
					key={tag}
					checked={selectedTags.indexOf(tag) > -1}
					onChange={checked => handleSelectedTags(tag, checked)}
					className={styles["filterTag-tags"]}
				>
					{tag}
				</CheckableTag>
			))}
		</>
	)
}