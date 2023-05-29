import { styles } from "../styles";

import { ComputersCanvas } from "./canvas";
import ScrollingBtn from "./ScrollingBtn";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX}  max-w-7xl mx-auto flex flex-row items-start gap-5 `}
			>
				{/* side decoration  */}
				<div className="flex flex-col items-center justify-center mt-24">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 h-48 violet-gradient" />
				</div>

				{/* text and subtext */}
				<div className="mt-24">
					<h1 className={`${styles.heroHeadText}`}>
						Hi, I'm <span className="text-[#915eff]">Aayush</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						A{" "}
						<span className="text-[#915eff]">
							Software Developer
						</span>
						.
					</p>
				</div>
			</div>

			{/* interactive computer component */}
			<ComputersCanvas className="mt-4" />

			{/* scrolling animation button */}
			<ScrollingBtn idName="#about" top={"-135px"} />
		</section>
	);
};

export default Hero;
