import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn } from "../utils/motion";

import SeactionHeading from "./SeactionHeading";
import { SectionWraper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					option={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
				>
					<img
						src={icon}
						alt={title}
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<SeactionHeading
				subText="Introduction"
				sectionHeadText="Overview."
			/>

			{/* intro */}
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary, text-[17px] max-w-3xl leading-[30px]"
			>
				I began my journey as an animator and discovered a profound
				passion for the captivating realm of coding. As I delved into
				the ever-expanding sea of coding possibilities, I find immense
				joy in exploring and experimenting with what is possible through
				coding and learning every day.
			</motion.p>

			{/* services */}
			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

const AboutWapper = () => {
	return (
		<SectionWraper idName="about">
			<About />
		</SectionWraper>
	);
};

export default AboutWapper;
