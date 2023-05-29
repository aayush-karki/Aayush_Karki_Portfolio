import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useMobile from "../../hooks/useMobile";

// component to render the computer model
const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={1}
				position={isMobile ? [0, -1, -3.25] : [0, -2, -1.75]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

// canvas where the computer model is rendered
const ComputersCanvas = () => {
	const { isMobile } = useMobile("640px");

	return (
		<div className="w-full h-4/6">
			<Canvas
				frameloop="demand"
				shadows
				camera={{ position: [20, 3, 5], fov: 25 }}
				gl={{ preserveDrawingBuffer: true }}
			>
				<Suspense fallback={<CanvasLoader />}>
					<OrbitControls
						enableZoom={false}
						maxPolarAngle={Math.PI / 2}
						minPolarAngle={Math.PI / 2}
					/>
					<Computers isMobile={isMobile} />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default ComputersCanvas;
