import { useState } from "react";
import styles from "../../Styles/LeftSidebar.module.css";
import AddTODO from "../AddTODO";
import image from "../../Images/manimage.jpg";
import {
	AlarmIcon,
	CalendarIcon,
	AddbtnIcon,
	NotifIcon,
	PayrollIcon,
} from "../../Icons/Icons";
import { todoList } from "../../Data/data";

const LeftSidebar = () => {
	const [clicked, setClicked] = useState<boolean>(false);
	const [enteredData, setEnteredData] = useState<{
		title: string;
		time: string;
	} | null>(null);

	const handleclick = (): void => {
		setClicked(!clicked);
	};

	return (
		<div className={styles.Container}>
			<div className={styles.iconbar}>
				<div className={styles.calender}>
					<CalendarIcon />
				</div>
				<div className={styles.alarm}>
					<AlarmIcon />
				</div>
				<div className={styles.notification}>
					<NotifIcon />
				</div>
				<div>
					<img
						className={styles.avatar}
						width={"100%"}
						height={"100%"}
						src={image}
					/>
				</div>
				<div className={styles.dropdown}>
					<hr className={styles.rightarrow} />
					<hr className={styles.leftarrow} />
				</div>
			</div>
			<div className={styles.formationcard}>
				<p className={styles.title}>Formation status</p>
				<p className={styles.status}>In progress</p>
				<div className={styles.slider}>
					<div className={styles.sliderstatus}></div>
				</div>
				<p className={styles.estimate}>Estimated processing</p>
				<p className={styles.days}>4-5 bussiness days</p>
				<button className={styles.view}>View status</button>
			</div>
			<div className={styles.Todolist}>
				<p className={styles.todostitle}>Your to-Do list</p>
				<div className={styles.todos}>
					{todoList.map((item) => {
						return (
							<div className={styles.todo} key={item.title}>
								<div className={styles.todo_icon}>
									{item.icon}
								</div>
								<div className={styles.todo_info}>
									<div className={styles.todotitle}>
										{item.title}
									</div>
									<div className={styles.tododate}>
										{item.date}
									</div>
								</div>
							</div>
						);
					})}
					{enteredData && (
						<div className={styles.todo}>
							<div className={styles.todo_icon}>
								<PayrollIcon />
							</div>
							<div className={styles.todo_info}>
								<div className={styles.todotitle}>
									{enteredData?.title}
								</div>
								<div className={styles.tododate}>
									{enteredData?.time}
								</div>
							</div>
						</div>
					)}
				</div>
				<button className={styles.add} onClick={handleclick}>
					<AddbtnIcon />
					<div className={styles.addbtn}>Add to do</div>
				</button>
				<AddTODO
					clicked={clicked}
					handleclick={handleclick}
					setEnteredData={setEnteredData}
				/>
			</div>
			<div className={styles.footer}>
				<p>Board meeting</p>
				<p>Feb 22 at 6:00 PM</p>
				<p>
					You have been invited to attend a meeting of the Boeard
					Diretors.
				</p>
			</div>
		</div>
	);
};

export default LeftSidebar;
