import { useState, useEffect } from "react";
import "./App.css";

import EmployeeCard from "./components/EmployeeCard";

function App() {
	const [employee, setEmployee] = useState();

	const getEmployee = () => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results);
			});
	};

	useEffect(() => {
		getEmployee();
	});

	return (
		<>
			{employee ? <EmployeeCard employee={employee} /> : <p>Loading...</p>}
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</>
	);
}

export default App;
