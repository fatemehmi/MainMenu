import { Children, ReactNode } from "react";
import styles from "../../Styles/Card.module.css";
import image from "../../images/chart.svg";
type propType = {
	height: number;
	width: number;
	icon?: ReactNode;
	header?: ReactNode;
	content?: ReactNode;
	margin?: {
		mt?: number;
		mr?: number;
		mb?: number;
		ml?: number;
		my?: number; // vertical margin
		mx?: number; // horizontal margin
	};
	headerheight?: number;
	zindex?: number;
};

const Card = ({
	height,
	width,
	icon,
	header,
	content,
	margin,
	zindex,
	headerheight,
}: propType) => {
	return (
		<div
			className={styles.Card}
			style={{
				height: `${height}px`,
				width: `${width}px`,
				marginTop: `${margin?.mt}px`,
				marginRight: `${margin?.mr}px `,
				marginLeft: ` ${margin?.ml}px`,
				marginBottom: ` ${margin?.mb}px`,
				zIndex: `${zindex}`,
			}}
		>
			{icon && (
				<div
					className={styles.card_icon}
					style={{
						backgroundImage: `url(${icon})`,
					}}
				></div>
			)}
			<div
				className={styles.card_header}
				style={{
					height: `${headerheight}px`,
				}}
			>
				<p>{header}</p>
			</div>
			<div className={styles.card_content}>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Card;
