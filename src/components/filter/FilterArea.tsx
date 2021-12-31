import React from "react";
import { Divider } from "antd";
import { FilterTag } from "./FilterTag";
import styles from "./FilterArea.module.css";

export const FilterArea: React.FC = () => {
	return (
		<>
			<FilterTag />
			<Divider dashed className={styles["filter-divider"]} />
		</>
	);
};