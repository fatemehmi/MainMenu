import Card from "../Card";
import Combo from "../Combo";
import Static from "../StaticCard";
import styles from "../../Styles/Content.module.css";
import Emails from "../Emails";
import LeftSidebar from "../LeftSidebar";
import chartimg from "../../Icons/chart.svg";
import wallet from "../../Icons/wallet.svg";
import wallet2 from "../../Icons/wallet-2.svg";
import card from "../../Icons/card-receive.svg";
import Linechart from "../LineChart";

type propstype = {
	flip: boolean;
};

const Content: React.FC<propstype> = ({ flip }) => {
	return (
		<div className={`${styles.Container} ${flip ? "" : styles.wide}`}>
			<div className={styles.right_container}>
				<Combo />
				<div className={styles.headcards}>
					<Card
						zindex={-1}
						width={164}
						height={146}
						icon={wallet2}
						header={"$143.223"}
						content={"Your bank balance"}
						margin={{ mt: 20, ml: 0, mb: 0 }}
					/>

					<Card
						width={164}
						height={146}
						icon={chartimg}
						header={"$43.11"}
						content={"Your Tax"}
						margin={{ mt: 20, ml: 25, mb: 0 }}
					/>

					<Card
						width={164}
						height={146}
						icon={wallet}
						header={"$24"}
						content={"Employees working today"}
						margin={{ mt: 20, ml: 25, mb: 0 }}
					/>

					<Card
						width={164}
						height={146}
						icon={card}
						header={"$3.287"}
						content={"This week's card spending"}
						margin={{ mt: 20, ml: 25, mb: 0 }}
					/>
				</div>
				<div className={styles.maincards}>
					<div className={styles.staticcards}>
						<Static
							width={211}
							height={139}
							header={"new clients"}
							count={54}
							statics={18.7}
						/>
						<Static
							width={211}
							height={139}
							header={"invoice overdue"}
							count={6}
							statics={-2.7}
						/>
					</div>
					<Card
						width={569}
						height={302}
						header={"Revenue"}
						content={
							"Chart" //<Linechart />
						}
						margin={{ ml: 24 }}
					/>
				</div>
				<Emails />
			</div>
			<LeftSidebar />
		</div>
	);
};

export default Content;
