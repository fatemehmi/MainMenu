import React, { useState } from "react";
import styles from "../../Styles/Combo.module.css";
import Card from "../Card";
import { comboOptions } from "../../Data/data";

const Combo: React.FC = () => {
	const options: { label: string; selected: boolean }[] = comboOptions;

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const toggleOption = (index: number) => {
		setSelectedOptions((prevSelectedOptions) => {
			const newSelectedOptions = [...prevSelectedOptions];

			if (newSelectedOptions.includes(index)) {
				newSelectedOptions.splice(newSelectedOptions.indexOf(index), 1);
			} else {
				newSelectedOptions.push(index);
			}

			return newSelectedOptions;
		});
	};

	const [searchValue, setSearchValue] = useState<string>("");

	const handleSearchChange = (value: string) => {
		setSearchValue(value);
	};

	return (
		<div className={styles.combo}>
			<div className={styles.input_container}>
				<label className={styles.label} htmlFor="in">
					Employees involved
				</label>
				<input
					onClick={toggleDropdown}
					className={styles.comboinput}
					name="in"
					type="text"
					placeholder="Select"
					readOnly
				/>
				<span
					onClick={toggleDropdown}
					className={`${styles.triangle} ${
						isOpen ? null : styles.open
					}`}
				/>
			</div>
			{isOpen && (
				<Card
					zindex={100}
					width={204}
					height={400}
					margin={{ mt: 4 }}
					headerheight={70}
					header={
						<input
							className={styles.SearchBox}
							type="text"
							placeholder="Search values"
							onChange={(e) => handleSearchChange(e.target.value)}
						/>
					}
					content={
						<>
							<ul className={styles.dropdownList}>
								{options
									.filter((option) =>
										option.label
											.toLowerCase()
											.includes(searchValue.toLowerCase())
									)
									.map((option, index) => (
										<li
											id="list"
											key={index}
											onClick={() => toggleOption(index)}
											className={
												selectedOptions.includes(index)
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
											{option.label}
										</li>
									))}
							</ul>
							<button
								onClick={toggleDropdown}
								className={styles.Apply}
								type="submit"
							>
								Apply
							</button>
							<div className={styles.footer}>
								<p>selected : {selectedOptions.length}</p>
								<button
									className={styles.Clear}
									onClick={() => setSelectedOptions([])}
								>
									Clear selected
								</button>
							</div>
						</>
					}
				/>
			)}
		</div>
	);
};

export default Combo;
