import { ReactNode } from "react";
import styles from "../../Styles/EmailRow.module.css";

type propType = {
	Avatar: string;
	name: string;
	content: string;
	date: string;
	time?: string;
};

const EmailRow = ({ Avatar, name, date, content, time }: propType) => {
	const inputTime = new Date(`2000-01-01T${time}`);

	const today = new Date();
	const formattedToday = today.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	});

	const isToday = formattedToday === date;

	const formattedTime = inputTime.toLocaleTimeString([], {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});

	return (
		<div className={styles.Card}>
			<div className={styles.card_avatar}>
				<img className={styles.card_avatar} src={Avatar} />
			</div>

			<div className={styles.card_name}>
				<p>{name}</p>
			</div>
			<div className={styles.card_content}>
				<p>{content}</p>
			</div>
			<div className={styles.card_date}>
				{isToday ? (
					<p>{formattedTime}</p>
				) : (
					<p>
						{date} at {formattedTime}
					</p>
				)}
			</div>
		</div>
	);
};

export default EmailRow;
