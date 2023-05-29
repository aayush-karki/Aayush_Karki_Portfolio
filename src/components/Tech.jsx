// import { technologies } from "../constants";

// import { BallCanvas } from "./canvas";
// import { SectionWraper } from "../hoc";

// const Tech = () => {

// 	return (
// 		<div className="flex flex-row flex-wrap justify-center gap-10">
// 			{technologies.map((tech) => (
// 				<div className="w-28 h-28" key={tech.name}>
// 					<BallCanvas icon={technologies.icon} />
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// const TechWapper = () => {
// 	return (
// 		<SectionWraper idName="work">
// 			<Tech />
// 		</SectionWraper>
// 	);
// };

// export default TechWapper;

import { technologies } from "../constants";

import { BallCanvas } from "./canvas";
import { SectionWraper } from "../hoc";
import ScrollingBtn from "./ScrollingBtn";
import SeactionHeading from "./seactionHeading";

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
			<SeactionHeading
				subText="What I know"
				sectionHeadText="Technologies"
			/>
			<Tech />
			{/* scrolling animation button */}
			<ScrollingBtn idName={"#work"} top={"-35px"} />
		</SectionWraper>
	);
};

export default TechWapper;
