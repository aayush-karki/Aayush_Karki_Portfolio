import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWraper } from "../hoc";

import { projects } from "../constants";
import { placeholderImg } from "../assets";
import { GithubIcon, LiveLinkIcon } from "./Icons";
import { fadeIn } from "../utils/motion";
import SeactionHeading from "./SeactionHeading";
import useMobile from "../hooks/useMobile";

// Project Link Icon component that appears on top right of the project card
// takes in link and type of link as props. type can be github or demo
const ProjectLinkIcon = ({ link, type }) =>
	type == "github" ? (
		<GithubIcon link={link} />
	) : (
		<LiveLinkIcon link={link} />
	);

// Project_Schema
// name: string
// description: string
// tags: {name: string, color: string}[]
// image: img
// source_code_link: link
// demo_link? : link
const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	demo_link,
}) => {
	const { isMobile } = useMobile("875px");

	return (
		<motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl w-[360px]"
			>
				{/* link icons if mobile*/}
				{isMobile && (
					<div className="relative w-full h-[52px]">
						<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
							{demo_link && (
								<ProjectLinkIcon link={demo_link} type="demo" />
							)}
							<ProjectLinkIcon
								link={source_code_link}
								type="github"
							/>
						</div>
					</div>
				)}

				{/* project image and link icon if not mobile*/}

				{!isMobile && (
					<div className="relative w-full h-[230px]">
						<img
							src={image ?? placeholderImg}
							alt={name}
							className="w-full h-full object-cover rounded-2xl"
						/>
						<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
							{demo_link && (
								<ProjectLinkIcon link={demo_link} type="demo" />
							)}
							<ProjectLinkIcon
								link={source_code_link}
								type="github"
							/>
						</div>
					</div>
				)}

				{/* project name and description */}
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">
						{description}
					</p>
				</div>

				{/* project tags */}
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag, index) => (
						<p
							key={tag.name}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	console.log(`work`);

	return (
		<>
			<SeactionHeading subText="My Work" sectionHeadText="Project" />

			{/* section description */}
			<div className="w-full flex flex-col">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Following projects showcases my skills and experience
					through real-world examples of my work. Each project is
					briefly described with links to code repositories and live
					demos in it. It reflects my ability to solve complex
					problems, work with different technologies, and manage
					projects effectively.
				</motion.p>

				{/* show all project cards */}
				<div className="mt-20 flex flex-wrap gap-7 justify-center">
					{projects.map((project, index) => (
						<ProjectCard
							key={`project-${index}`}
							{...project}
							index={index}
						/>
					))}
				</div>
			</div>
		</>
	);
};

const WorksWapper = () => {
	return (
		<SectionWraper idName="workProject">
			<Works />
		</SectionWraper>
	);
};

export default WorksWapper;
