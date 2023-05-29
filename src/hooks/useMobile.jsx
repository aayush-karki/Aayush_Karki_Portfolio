import { useEffect, useState } from "react";

const useMobile = (maxWidth) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${maxWidth})`);

		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (e) => {
			setIsMobile(e.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () =>
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
	}, []);
	return { isMobile, setIsMobile };
};

export default useMobile;
