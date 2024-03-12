import Content from "../Content";

type propstype = {
	flip: boolean;
};

const MainBody: React.FC<propstype> = ({ flip }) => {
	return <Content flip={flip} />;
};

export default MainBody;
