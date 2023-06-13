import { SectionWraper } from "../hoc";
import { GithubIcon, LinkedInIcon } from "./Icons";

const Footer = () => {
	return (
		<div className="flex justify-center gap-10">
			<GithubIcon link={"https://github.com/aayush-karki"} />
			<LinkedInIcon link={"https://www.linkedin.com/in/aayushkarki/"} />
		</div>
	);
};

const FooterWapper = () => {
	return (
		<SectionWraper idName="footer">
			<Footer />
		</SectionWraper>
	);
};

export default FooterWapper;
