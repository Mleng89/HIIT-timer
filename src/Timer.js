import React, { useState, useEffect } from 'react';

export default function Timer() {
	const [time, setTime] = useState(5);
	const [newTime, setNewTime] = useState(20);
	const handleClick = (e) => {
		e.preventDefault();
	};
	useEffect(() => {
		const countDown = time > 0 && setInterval(() => setTime(time - 1), 1000);
		return () => clearInterval(countDown);
	}, [time]);

	useEffect(() => {
		const coolCountDown =
			newTime > 0 && setInterval(() => setNewTime(newTime - 1), 1000);
		return () => clearInterval(coolCountDown);
	}, [newTime]);

	if (time === 0) {
		return (
			<div>
				<h1>COOL DOWN TIME!</h1>
				<h2>{newTime}</h2>
			</div>
		);
	}

	return (
		<>
			<div>
				<h1>Timer: {time}</h1>
			</div>
		</>
	);
}
