import EmailRow from "../EmailRow";
import styles from "../../Styles/Email.module.css";
import { emailData } from "../../Data/data";

const Emails = () => {
	return (
		<div className={styles.EmailContainer}>
			<p className={styles.title}>Emails</p>
			<div className={styles.rowContainer}>
				{emailData?.map((email) => {
					return (
						<EmailRow
							key={email.name}
							Avatar={email.avatar}
							name={email.name}
							content={email.emailcontent}
							date={email.date}
							time={email.time}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Emails;
