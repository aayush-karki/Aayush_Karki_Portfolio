import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";

import SeactionHeading from "./seactionHeading";
import { SectionWraper } from "../hoc";

const ExperienceCard = ({ experience }) => (
	<VerticalTimelineElement
		contentStyle={{ background: "#1d1836", color: "#fff" }}
		contentArrowStyle={{ borderRight: "7px solid  #232631" }}
		date={experience.date}
		iconStyle={{ background: experience.iconBg }}
		icon={
			<div className="flex justify-center items-center w-full h-full">
				<img
					src={experience.icon}
					alt={experience.company_name}
					className="w-[80%] h-[80%] object-contain"
				/>
			</div>
		}
	>
		{/* title and company name*/}
		<div>
			<h3 className="text-[24px]">{experience.title}</h3>
			<p
				className="text-secondary text-[16px] font-semibold"
				style={{ margin: 0 }}
			>
				{experience.company_name}
			</p>
		</div>

		{/* points */}
		<ul className="mt-5 list-disc ml-5 space-y-2">
			{experience.points.map((point, index) => (
				<li
					key={`experience.point-${index}`}
					className="text-white-100 text-[14px] pl-1 tracting-wider"
				>
					{point}
				</li>
			))}
		</ul>
	</VerticalTimelineElement>
);

const Experience = () => {
	return (
		<>
			<SeactionHeading
				subText="What I have done so far"
				sectionHeadText="Expirences"
			/>

			{/* expirence cards */}
			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

const ExperienceWapper = () => {
	return (
		<SectionWraper idName="work">
			<Experience />
		</SectionWraper>
	);
};

export default ExperienceWapper;
