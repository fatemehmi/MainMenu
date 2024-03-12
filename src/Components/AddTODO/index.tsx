import React, { useRef, useEffect, useState } from "react";
import styles from "../../Styles/AddTODO.module.css";
import { CloseIcon, DeleteIcon, SearchIcon } from "../../Icons/Icons";
import { Addtododata } from "../../Data/data";

type PropTypes = {
	clicked: boolean;
	handleclick: () => void;
	setEnteredData: (data: { title: string; time: string } | null) => void;
};

const AddTODO: React.FC<PropTypes> = ({
	clicked,
	handleclick,
	setEnteredData,
}) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const personInputRef = useRef<HTMLDivElement>(null);
	const [clickedInput, setClickedInput] = useState<number>(0);
	const [titleInputValue, setTitleInputValue] = useState<string>("");
	const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const [searchValue, setSearchValue] = useState<string>("");
	const addSelectedCount = selectedOptions.length - 3;
	const [currentTime, setCurrentTime] = useState<string>("");

	const options: {
		name: string;
		id: string;
		image: string;
		selected: boolean;
	}[] = Addtododata;

	const updateCurrentTime = () => {
		const now = new Date();
		const formattedTime = now.toLocaleString("en-US", {
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});

		const [date, time] = formattedTime.split(", ");
		const currentTime = `${date} at ${time}`;

		setCurrentTime(currentTime);
	};

	const toggleOption = (index: number, deleteClicked: boolean = false) => {
		setSelectedOptions((prevSelectedOptions) => {
			const newSelectedOptions = [...prevSelectedOptions];

			if (deleteClicked) {
				const indexToRemove = newSelectedOptions.indexOf(index);
				if (indexToRemove !== -1) {
					newSelectedOptions.splice(indexToRemove, 1);
				}
			} else {
				if (newSelectedOptions.includes(index)) {
					newSelectedOptions.splice(
						newSelectedOptions.indexOf(index),
						1
					);
				} else {
					newSelectedOptions.push(index);
				}
			}

			return newSelectedOptions;
		});
	};

	useEffect(() => {
		const intervalId = setInterval(updateCurrentTime, 1000);
		return () => clearInterval(intervalId);
		const handleOutsideClick = (event: MouseEvent) => {
			const clickedElement = event.target as Node;

			if (
				modalRef.current &&
				!modalRef.current.contains(clickedElement)
			) {
				handleclick();
				setTitleInputValue("");
				setSearchValue("");
			}
		};

		if (clicked) {
			document.addEventListener("mousedown", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [clicked, handleclick]);

	const clickedOn = (): void => {
		handleclick();
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
		setClickedInput(clickedInput !== 2 ? 2 : 0);
	};

	const handleClearClick = () => {
		setTitleInputValue("");
	};

	const handleBlur = () => {
		if (titleInputValue.trim() === "") {
			setClickedInput(0);
		}
	};

	const handleSearchChange = (value: string) => {
		setSearchValue(value);
	};

	const handleAcceptClick = () => {
		const updatedAddtododata = Addtododata.map((item, index) => ({
			...item,
			selected: selectedOptions.includes(index),
		}));
		setSelectedOptions([]);

		setEnteredData({
			title: titleInputValue,
			time: currentTime,
		});

		handleclick();
	};

	return (
		<div
			className={`${styles.modalContainer} ${clicked ? styles.show : ""}`}
		>
			<div ref={modalRef} className={styles.modalContent}>
				<div className={styles.header}>
					<p className={styles.title}>Add to do</p>
				</div>

				<div className={styles.body}>
					<div className={styles.titleInput}>
						<label
							onClick={() =>
								setClickedInput(clickedInput !== 1 ? 1 : 0)
							}
							className={`${styles.inputlabel} ${
								clickedInput === 1 || titleInputValue !== ""
									? styles.clicked1
									: ""
							}`}
							htmlFor="title"
						>
							write a title
						</label>
						<input
							onClick={() =>
								setClickedInput(clickedInput !== 1 ? 1 : 0)
							}
							onBlur={() => setClickedInput(0)}
							onChange={(e) => setTitleInputValue(e.target.value)}
							value={titleInputValue}
							className={styles.input}
							name="title"
							type="text"
						/>
						<span
							className={styles.clear}
							onClick={handleClearClick}
						>
							<CloseIcon />
						</span>
					</div>
					<div className={styles.personInput} ref={personInputRef}>
						<label
							className={`${styles.inputlabel} ${
								clickedInput === 2 ? styles.clicked2 : ""
							}`}
							htmlFor="person"
						>
							add person
						</label>
						<input
							onClick={() => {
								toggleDropdown();
							}}
							className={styles.input}
							name="person"
							type="text"
							readOnly
						/>
						<span className={styles.selectedpeople}>
							<div className={styles.peoplecontainer}>
								{selectedOptions
									.map((index) => (
										<div
											key={index}
											className={styles.selectedperson}
										>
											<img
												src={options[index].image}
												width={"24px"}
												height={"24px"}
												style={{
													borderRadius: "50%",
												}}
												alt={`Person ${options[index].name}`}
											/>
											<p className={styles.personname}>
												{options[index].name}
											</p>
											<DeleteIcon
												onClick={() =>
													toggleOption(index, true)
												}
												className={styles.deleteIcon}
											/>
										</div>
									))
									.slice(0, 3)}
							</div>
							{selectedOptions.length > 3 && (
								<div className={styles.additionaloptions}>
									+{addSelectedCount}
								</div>
							)}
						</span>

						<span
							onClick={() => toggleDropdown()}
							className={`${styles.triangle} ${
								!isOpen && styles.open
							}`}
						/>
						{isOpen && (
							<div className={styles.Card}>
								<input
									className={styles.SearchBox}
									type="text"
									placeholder="Search person"
									onChange={(e) =>
										handleSearchChange(e.target.value)
									}
								/>
								<span className={styles.searchIcon}>
									<SearchIcon />
								</span>
								<ul className={styles.dropdownList}>
									{options
										.filter((option) =>
											option.name
												.toLowerCase()
												.includes(
													searchValue.toLowerCase()
												)
										)
										.map((option, index) => (
											<li
												id="list"
												key={index}
												onClick={() =>
													toggleOption(index)
												}
												className={
													selectedOptions.includes(
														index
													)
														? `${styles.selected} ${styles.lis}`
														: styles.lis
												}
											>
												<input
													className={styles.check}
													type="checkbox"
													checked={selectedOptions.includes(
														index
													)}
												/>
												<img
													className={styles.image}
													src={option.image}
												/>
												{option.name}/{option.id}
											</li>
										))}
								</ul>
								<div className={styles.footer}>
									<p>selected : {selectedOptions.length}</p>
									<p>Current Time: {currentTime}</p>
									<button
										className={styles.Clear}
										onClick={() => setSelectedOptions([])}
									>
										Clear selected
									</button>
								</div>
							</div>
						)}
					</div>
				</div>

				<div className={styles.btngroup}>
					<button className={styles.Cancel} onClick={clickedOn}>
						Cancel
					</button>
					<button
						className={styles.Accept}
						onClick={handleAcceptClick}
					>
						Accept
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddTODO;
