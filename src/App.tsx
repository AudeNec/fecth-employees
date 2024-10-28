import { useState, useEffect } from "react";
import "./App.css";

import EmployeeCard from "./components/EmployeeCard";

function App() {
	const [employee, setEmployee] = useState();

	const getEmployee = () => {
		fetch("https://randomuser.me/api?nat=en")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};

	useEffect(() => {
		getEmployee();
	}, []);

	return (
		<>
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</>
	);
}

export default App;
