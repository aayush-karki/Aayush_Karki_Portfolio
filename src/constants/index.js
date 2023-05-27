import {
	mobile,
	backend,
	web,
	creator,
	cplusspluss,
	csharp,
	javascript,
	typescript,
	html,
	css,
	scss,
	chakraui,
	reactjs,
	tailwind,
	threejs,
	nodejs,
	mongodb,
	sql,
	java,
	junit,
	android,
	python,
	hadoop,
	scala,
	spark,
	git,
	jira,
	jenkins,
	figma,
	dotdashMeredith,
	reactOnImg,
	gameHub,
	geoContact,
	broodmaker,
	canastaCPP,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Software Developer",
		icon: creator,
	},
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Android Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "C++",
		icon: cplusspluss,
	},
	{
		name: "C#",
		icon: csharp,
	},
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "SCSS",
		icon: scss,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Chakra UI",
		icon: chakraui,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "SQL",
		icon: sql,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "Java",
		icon: java,
	},
	{
		name: "Junit",
		icon: junit,
	},
	{
		name: "Android",
		icon: android,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "Hadoop",
		icon: hadoop,
	},
	{
		name: "Scala",
		icon: scala,
	},
	{
		name: "Spark",
		icon: spark,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "Jira",
		icon: jira,
	},
	{
		name: "Jenkins",
		icon: jenkins,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "Frontend Engineer Intern",
		company_name: "Dotdash Meredith",
		icon: dotdashMeredith,
		iconBg: "#383E56",
		date: "June 2022 - December 2022",
		points: [
			"Developed visually appealing templates and components utilizing JavaScript, XML and SCSS within a custom, component-based framework.",
			"Created responsive components for the 'Bubbles' digital issue, ensuring seamless performance and cross-browser compatibility. These components were viewed by over 1,000,000 individuals within the first month of release.",
			"Revamped recipe printing system to enhance performance, readability, and significantly reduce load times by over 50%.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products while reglarly using tools tools such as Squadron, Git/Bitbucket, Jenkins, Jira, Confluence, and Kibana.",
		],
	},
];

const projects = [
	{
		name: "BroodMaker",
		description:
			"BroodMaker, and BroodUI is developed using C++ and SFML for graphics. The BroodMaker is application that uses the BroodUI library for all the UI elements and user interaction with them. The Brood UI library uses the Immediate-Mode Graphical User Interface API principle as opposed to the Retained-mode GUI.",
		tags: [
			{
				name: "C++",
				color: "blue-text-gradient",
			},
			{
				name: "uiLibrary",
				color: "green-text-gradient",
			},
			{
				name: "GUI",
				color: "orange-text-gradient",
			},
			{
				name: "SFML",
				color: "pink-text-gradient",
			},
		],
		image: broodmaker,
		source_code_link: "https://github.com/aayush-karki/BroodMaker",
	},
	{
		name: "Game Hub",
		description:
			"Web application made using ReactJS, and ChakraUI that enables users to search and sort games by genre, platform, name, popularity, rating, and release date. It uses RawgAPI to to fetch up-to-date game information.It was deployed using vercel",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "chakraui",
				color: "orange-text-gradient",
			},
		],
		image: gameHub,
		source_code_link: "https://github.com/aayush-karki/game-hub",
		demo_link: "https://game-hub-blond.vercel.app/",
	},
	{
		name: "Canasta Card Game (C++)",
		description:
			"Console based implementation of the canasta card game made in c++",
		tags: [
			{
				name: "c++",
				color: "blue-text-gradient",
			},
			{
				name: "consoleGame",
				color: "green-text-gradient",
			},
			{
				name: "CardGame",
				color: "orange-text-gradient",
			},
		],
		image: canastaCPP,
		source_code_link: "https://github.com/aayush-karki/CanastaCPP",
	},

	{
		name: "Geo Contact",
		description:
			"A geo-coding web application with maps. It allows users to register contacts and identify the location on the map. It uses MVC pattern. Like wise it uses MapBox API as geocoding API and MongoDB as database.",
		tags: [
			{
				name: "express",
				color: "blue-text-gradient",
			},
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "less",
				color: "orange-text-gradient",
			},
			{
				name: "bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "MongoDB",
				color: "blue-text-gradient",
			},
			{
				name: "pug",
				color: "green-text-gradient",
			},
			{
				name: "fullstack",
				color: "orange-text-gradient",
			},
		],
		image: geoContact,
		source_code_link: "https://github.com/aayush-karki/GeoConatact",
	},
	{
		name: "Rectangles On Image",
		description:
			"An WPF application that allows the users to create and manipulate rectangles over an image. It allows user to load images, create rectangles over the image, drag the created rectangles, change color of the rectangle, delete the created rectangles, and save the image.",
		tags: [
			{
				name: "C#",
				color: "blue-text-gradient",
			},
			{
				name: "WPF",
				color: "green-text-gradient",
			},
			{
				name: "UI/UX",
				color: "pink-text-gradient",
			},
		],
		image: reactOnImg,
		source_code_link:
			"https://github.com/aayush-karki/RectanglesOnImage_WPF_App",
	},
	{
		name: "Distributed Programming",
		description:
			"A collection of programming problems solved in python and scala using hadoop and spark libraries.",
		tags: [
			{
				name: "python",
				color: "blue-text-gradient",
			},
			{
				name: "scala",
				color: "green-text-gradient",
			},
			{
				name: "hadoop",
				color: "pink-text-gradient",
			},
			{
				name: "spark",
				color: "orange-text-gradient",
			},
			{
				name: "cloudComputing",
				color: "blue-text-gradient",
			},
		],
		image: "",
		source_code_link:
			"https://github.com/aayush-karki/distributed-Programming",
	},
];

export { services, technologies, experiences, projects };
