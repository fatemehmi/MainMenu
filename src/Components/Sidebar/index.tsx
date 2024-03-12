import { useState } from "react";
import styles from "../../Styles/Sidebar.module.css";
import {
	BankIcon,
	HomeIcon,
	document_textIcon,
	Money_sendIcon,
	PeopleIcon,
	SettingIcon,
	EmailIcon,
	ListIcon,
	FinantialIcon,
	ReportIcon,
} from "../../Icons/Icons";

type propstype = {
	flip: boolean;
	onFlipChange: () => void;
};

const Sidebar: React.FC<propstype> = ({ flip, onFlipChange }) => {
	const handleFlip = (): void => {
		onFlipChange();
	};

	return (
		<div className={styles.Container}>
			<div
				className={styles.Sidebar}
				style={{
					width: flip ? "185px" : "90px",
				}}
			>
				<div
					className={`${styles.Drop} ${
						flip ? "" : styles.compressed
					}`}
				>
					<p className={styles.Sidebar_title}>Drop</p>
					<div>
						<button>
							<HomeIcon />
							<p
								className={`${styles.text}  ${
									flip ? "" : styles.select
								}`}
							>
								Dashboard
							</p>
						</button>
					</div>
					<div>
						<button>
							<ReportIcon />
							<p
								className={`${styles.text}  ${
									flip ? "" : styles.select
								}`}
							>
								Report
							</p>
						</button>
					</div>
					<div>
						<button>
							<BankIcon />
							<p
								className={`${styles.text}  ${
									flip ? "" : styles.select
								}`}
							>
								Bank
							</p>
						</button>
					</div>
					<div>
						<button>
							<EmailIcon />
							<p
								className={`${styles.text}  ${
									flip ? "" : styles.select
								}`}
							>
								Email
							</p>
						</button>
					</div>
					<div>
						<button>
							<PeopleIcon />
							<p
								className={`${styles.text}  ${
									flip ? "" : styles.select
								}`}
							>
								Group
							</p>
						</button>
					</div>
					<div>
						<button>
							<ListIcon />
							<p
								className={`${styles.text}  ${
									flip ? "" : styles.select
								}`}
							>
								List
							</p>
						</button>
					</div>
					<div>
						<button>
							<FinantialIcon />
							<p
								className={`${styles.text}  ${
									flip ? "" : styles.select
								}`}
							>
								Finance
							</p>
						</button>
					</div>
				</div>
				<div
					className={`${styles.Setting} ${
						flip ? "" : styles.compressed
					}`}
				>
					<button>
						<SettingIcon />
						<p
							className={`${styles.text}  ${
								flip ? "" : styles.select
							}`}
						>
							Setting
						</p>
					</button>
				</div>
			</div>
			<div className={styles.flip}>
				<button
					onClick={handleFlip}
					style={{
						left: flip ? "170px" : "75px",
						paddingLeft: flip ? "2px" : "5px",
					}}
				>
					<hr
						style={{
							width: "12px",
							height: "2px",
							backgroundColor: "#6941C6",
							transform: flip ? "rotate(-45deg)" : "rotate(45deg",
							border: "1px solid #6941C6",
							marginBottom: "-3px",
							borderRadius: "2px",
						}}
					/>
					<hr
						style={{
							width: "12px",
							height: "2px",
							backgroundColor: "#6941C6",
							transform: flip
								? "rotate(45deg)"
								: "rotate(-45deg)",
							border: "1px solid #6941C6",
							borderRadius: "2px",
						}}
					/>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
