// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
// 	Decal,
// 	Float,
// 	OrbitControls,
// 	Preload,
// 	useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Ball = (props) => {
// 	const [decal] = useTexture([props.imgUrl]);

// 	return (
// 		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
// 			<ambientLight intensity={0.25} />
// 			<directionalLight position={[0, 0, 0.05]} />
// 			<mesh castShadow receiveShadow scale={2.75}>
// 				<icosahedronGeometry args={[1, 1]} />
// 			</mesh>
// 		</Float>
// 	);
// };

// const BallCanvas = ({ icon }) => {
// 	return (
// 		<Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
// 			<Suspense fallback={<CanvasLoader />}>
// 				<OrbitControls enableZoom={false} />
// 				<Ball imgUrl={icon} />
// 			</Suspense>

// 			<Preload all />
// 		</Canvas>
// 	);
// };

// export default BallCanvas;

import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Bounds,
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import useMobile from "../../hooks/useMobile";

const Ball = ({ icon, position, rotation }) => {
	const decal = useMemo(() => new THREE.TextureLoader().load(icon), [icon]);

	return (
		<scene shadows="accumulative" adjustCamera="true">
			<Float
				speed={0.1}
				rotationIntensity={-1.5}
				floatIntensity={0}
				floatingRange={[-0.01, 0.01]}
			>
				<ambientLight intensity={0.03} />
				<directionalLight position={[10, 5, -5]} />
				<mesh castShadow receiveShadow scale={1} position={position}>
					<icosahedronGeometry args={[1, 1]} />
					<meshStandardMaterial color="#fff8eb" flatShading />
					<Decal
						position={[0, 0, 1]}
						rotation={[0, 0, 0]}
						scale={1.2}
						map={decal}
						flatShading
					/>
				</mesh>
			</Float>
		</scene>
	);
};

const BallCanvas = ({ icons }) => {
	const { isMobile } = useMobile("700px");

	const iconsLen = icons.length;
	const totalCols = isMobile ? 3 : 5;
	const totalRows = Math.ceil(iconsLen / totalCols);

	return (
		<Canvas
			frameloop="always"
			dpr={[1, 1]}
			camera={{ position: [0, 0, 5], fov: 75 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Bounds>
					<group>
						{icons.map((icon, index) => {
							const currCol = index % totalCols; // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
							const currRow = Math.floor(index / totalRows);

							return (
								<Ball
									key={icon}
									icon={icon}
									position={
										isMobile
											? [
													currCol * 5 - 5,
													-index * 0.75 +
														9 +
														currCol * 0.75,
													-9,
											  ]
											: [
													currCol * 5 - 10,
													-currRow * 3 + 6,
													-9,
											  ]
									}
								/>
							);
						})}
					</group>
				</Bounds>
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
