import { useState } from "react";
import MainBody from "../../Components/MainBody";
import Sidebar from "../../Components/Sidebar";

const Main: React.FC = () => {
	const [flip, setFlip] = useState<boolean>(false);
	const handleFlipChange = () => {
		setFlip(!flip);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
			}}
		>
			<Sidebar flip={flip} onFlipChange={handleFlipChange} />
			<MainBody flip={flip} />
		</div>
	);
};

export default Main;
