import React from "react";

const Icon = ({ link, icon, iconName }) => (
	<div
		onClick={() => window.open(link, "_blank")}
		className="black-gradient w-12 h-12 ml-1 rounded-full flex justify-center items-center cursor-pointer"
	>
		<img
			src={icon}
			alt={`${iconName} link`}
			className="w-1/2 h-1/2 object-contain"
		/>
	</div>
);

export default Icon;
