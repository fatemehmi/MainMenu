import Liviaimg from "../Images/Livia_Stanton.jpg";
import Allisonimg from "../Images/Allison_Lipshutz.jpg";
import Martinimg from "../Images/Martin_Stanton.jpg";
import Alfredoimg from "../Images/Alfredo_Botosh.jpg";
import Annimg from "../Images/Ann_Philips.jpg";
import { PayrollIcon, TimeIcon, DocumentIcon } from "../Icons/Icons";
import Matinabbasi from "../Images/Matin_abbasi.png";
import Matinghaderi from "../Images/Matin_ghaderi.png";
import Matin_alipour from "../Images/Matin_alipour.png";
import Matin_hasani from "../Images/Matin_hasani.png";
import Matin_kazemi from "../Images/Matin_kazemi.png";
import Matin_mohammadi from "../Images/Matin_mohammadi.png";

export var emailData = [
	{
		avatar: Liviaimg,
		name: "Livia Stanton",
		emailcontent: "Meeting scheduled",
		date: "Mar 12",
		time: "13:24",
	},
	{
		avatar: Allisonimg,
		name: "Allison Lipshutz",
		emailcontent: "Update on marketing campaign",
		date: "Mar 12",
		time: "12:14",
	},
	{
		avatar: Martinimg,
		name: "Martin Stanton",
		emailcontent: "Designly 2.0 is about to launch",
		date: "Dec 19",
		time: "20:01",
	},
	{
		avatar: Alfredoimg,
		name: "Alfredo Botosh",
		emailcontent: "My friend Julie loves Dapper!",
		date: "Dec 19",
		time: "18:11",
	},
	{
		avatar: Annimg,
		name: "Ann Philips",
		emailcontent: "My friend Julie loves Dapper!",
		date: "Dec 19",
		time: "18:11",
	},
	{
		avatar: Liviaimg,
		name: "Livia Stanton",
		emailcontent: "Designly 2.0 is about to launch",
		date: "Dec 19",
		time: "03:02",
	},
];

export var todoList = [
	{
		title: "Run Payroll",
		icon: <PayrollIcon />,
		people: "",
		date: "14:53",
	},
	{
		title: "Review time off request",
		icon: <TimeIcon />,
		people: "",
		date: "13:20",
	},
	{
		title: "Sign board resoluation",
		icon: <DocumentIcon />,
		people: "",
		date: "20:56",
	},
];

export const chartdata = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
	datasets: [
		{
			data: [0, 5000, 10000, 15000, 20000, 25000],
			backgroundColor: "transparent",
			borderColor: "#f26c6d",
			pointBorderColor: "transparent",
			pointerborderWidth: 4,
			tension: 0.5,
		},
	],
};

export const options = {
	plugins: {
		legend: true,
		scales: {
			y: {
				min: 0,
				max: 20000,
			},
		},
	},
};

export const comboOptions = [
	{ label: "Menu 1", selected: false },
	{ label: "Menu 2", selected: false },
	{ label: "Menu 3", selected: false },
	{ label: "Menu 4", selected: false },
	{ label: "Menu 5", selected: false },
	{ label: "Menu 6", selected: false },
	{ label: "Menu 7", selected: false },
];

export const Addtododata = [
	{
		name: "Matin abbasi",
		id: "0234",
		image: Matinabbasi,
		selected: false,
	},
	{
		name: "Matin ghaderi",
		id: "0874",
		image: Matinghaderi,
		selected: false,
	},
	{
		name: "Matin kazemi",
		id: "0987",
		image: Matin_kazemi,
		selected: false,
	},
	{
		name: "Matin hasani",
		id: "0877",
		image: Matin_hasani,
		selected: false,
	},
	{
		name: "Matin mohammadi",
		id: "0845",
		image: Matin_mohammadi,
		selected: false,
	},
	{
		name: "Matin alipour",
		id: "0457",
		image: Matin_alipour,
		selected: false,
	},
];
