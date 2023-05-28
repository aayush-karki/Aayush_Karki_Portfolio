import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SeactionHeading = ({ subText, sectionHeadText }) => {
	return (
		<motion.div variants={textVariant()}>
			<p className={styles.sectionSubText}>{subText}</p>
			<h2 className={styles.sectionHeadText}>{sectionHeadText}.</h2>
		</motion.div>
	);
};

export default SeactionHeading;
