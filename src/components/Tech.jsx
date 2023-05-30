import { technologies } from "../constants";

import { BallCanvas } from "./canvas";
import { SectionWraper } from "../hoc";
import ScrollingBtn from "./ScrollingBtn";
import SeactionHeading from "./SeactionHeading";

const Tech = () => {
	// array with all the icons
	const icons = Object.values(technologies).map(
		(technology) => technology.icon
	);
	return (
		<div className="w-full h-[75vh] mx-auto">
			<BallCanvas icons={icons} />
		</div>
	);
};

const TechWapper = () => {
	return (
		<SectionWraper idName="tech">
			{/* TODO: add toggle zoom option */}
			<SeactionHeading
				subText="What I know"
				sectionHeadText="Technologies"
			/>
			<Tech />
			{/* scrolling animation button */}
			<ScrollingBtn idName={"#workProject"} top={"-35px"} />
		</SectionWraper>
	);
};

export default TechWapper;
