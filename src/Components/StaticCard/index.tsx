import { ReactNode } from "react";
import styles from "../../Styles/Static.module.css";

type propType = {
	height: number;
	width: number;
	statics?: number;
	header?: ReactNode;
	count?: number;
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

const Static = ({
	height,
	width,
	statics,
	header,
	count,
	margin,
}: propType) => {
	return (
		<div
			className={styles.StaticCard}
			style={{
				height: `${height}px`,
				width: `${width}px`,
				marginTop: `${margin?.mt}px`,
				marginRight: `${margin?.mr}px `,
				marginLeft: ` ${margin?.ml}px`,
				marginBottom: ` ${margin?.mb}px`,
			}}
		>
			<div className={styles.general}>
				<div className="main">
					<div className={styles.card_header}>
						<h3>{header}</h3>
					</div>
					<div className={styles.card_count}>
						<h1>{count}</h1>
					</div>
				</div>
				<div
					className={`${styles.card_statics} ${
						statics && statics < 0
							? styles.negative
							: styles.positive
					}`}
				>
					{statics && statics < 0 ? (
						<h3>{statics}%</h3>
					) : (
						<h3>+{statics}%</h3>
					)}
				</div>
			</div>
		</div>
	);
};

export default Static;
