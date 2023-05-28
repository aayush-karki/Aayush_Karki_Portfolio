import { technologies } from "../constants";

import { BallCanvas } from "./canvas";
import { SectionWraper } from "../hoc";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((tech) => (
				<div className="w-28 h-28" key={tech.name}>
					<BallCanvas icon={technologies.icon} />
				</div>
			))}
		</div>
	);
};

const TechWapper = () => {
	return (
		<SectionWraper idName="work">
			<Tech />
		</SectionWraper>
	);
};

export default TechWapper;
