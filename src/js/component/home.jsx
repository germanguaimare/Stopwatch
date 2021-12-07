import React, { useEffect, useState } from "react";
import "../../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

const Home = () => {
	let [ms, setms] = useState(0);
	let [sec, setsec] = useState(0);
	let [min, setmin] = useState(0);
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
		clearInterval();
		setms((ms = 0));
		setsec((sec = 0));
		setmin((min = 0));
	};
	useEffect(() => {});
	return (
		<div className="container mt-5" id="test">
			<h3>My Stopwatch</h3>
			<div id="watchSpace">
				<Card body color="dark" inverse id="myWatch">
					<CardBody className="d-flex flex-column justify-content-center align-items-center">
						<CardTitle tag="h2" id="myTime">
							<span>{min}</span>
							<span>:</span>
							<span>{sec}</span>
							<span>:</span>
							<span>{ms}</span>
						</CardTitle>
						<div
							className="d-flex justify-content-center"
							id="buttonSpace">
							<Button
								onClick={() => {
									setInterval(startWatch, 10);
								}}>
								Start
							</Button>
							<Button>Stop</Button>
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
