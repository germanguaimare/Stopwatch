import React, { useEffect, useState } from "react";
import "../../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

const Home = () => {
	useEffect(() => {}, []);
	let [ms, setms] = useState(0);
	let [sec, setsec] = useState(0);
	let [min, setmin] = useState(0);
	let myInterval;
	const startWatch = () => {
		setms((ms += 1));
		if (ms == 100) {
			setms((ms = 0));
			setsec((sec += 1));
		} else if (sec == 60) {
			setsec((sec = 0));
			setmin((min += 1));
		}
	};
	const resetWatch = () => {
		clearInterval(myInterval);
		myInterval = null;
		setms((ms = 0));
		setsec((sec = 0));
		setmin((min = 0));
	};
	const twoDigits = (x) => {
		let formattedNumber = x.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});
		return formattedNumber;
	};
	const startInterval = () => {
		clearInterval(myInterval);
		myInterval = setInterval(startWatch, 10);
		console.log(myInterval);
	};

	const stopInterval = () => {
		clearInterval(myInterval);
		// release our intervalID from the variable
		myInterval = null;
	};
	return (
		<div className="container mt-5" id="test">
			<h3>My Stopwatch</h3>
			<div id="watchSpace">
				<Card body color="dark" inverse id="myWatch">
					<CardBody className="d-flex flex-column justify-content-center align-items-center">
						<CardTitle tag="h2" id="myTime">
							<span>{twoDigits(min)}</span>
							<span>:</span>
							<span>{twoDigits(sec)}</span>
							<span>:</span>
							<span>{twoDigits(ms)}</span>
						</CardTitle>
						<div
							className="d-flex justify-content-center"
							id="buttonSpace">
							<Button
								onClick={() => {
									startInterval();
								}}>
								Start
							</Button>
							<Button
								onClick={() => {
									stopInterval();
								}}>
								Stop
							</Button>
							<Button
								onClick={() => {
									resetWatch();
								}}>
								Reset
							</Button>
						</div>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

export default Home;
