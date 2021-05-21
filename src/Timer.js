import React, { useState, useEffect } from 'react';

export default function Timer() {
	const [time, setTime] = useState(0);
	//return
	//else return time
	const [newTime, setNewTime] = useState(0);
	console.log('what is my time', time);
	console.log('what is my newTime', newTime);

	const handleClick = (e) => {
		e.preventDefault();
		console.log(e.target);
	};
	const handleChange = (e) => {
		setTime(e.target.value);
	};
	// const handleChange2 = (e) => {
	// 	setNewTime(e.target.value);
	// };

	useEffect(() => {
		const countDown = time > 0 && setInterval(() => setTime(time - 1), 1000);
		return () => clearInterval(countDown);
	}, [time]);
	useEffect(() => {
		const coolCountDown =
			newTime > 0 && setInterval(() => setNewTime(newTime - 1), 1000);
		return () => clearInterval(coolCountDown);
	}, [newTime]);

	return (
		<>
			<form onSubmit={handleClick}>
				<label> Enter your time: </label>
				<input
					id='time'
					name='time'
					type='text'
					value={time}
					onChange={handleChange}
				/>
				<input type='submit' value='Submit' />
				{/* <label> Enter your cool down time: </label>
				<input
					id='cdtime'
					name='cdtime'
					type='text'
					value={newTime}
					onChange={handleChange2}
				/> */}
			</form>

			<h1>Timer</h1>
			<h2>{time}</h2>
		</>
	);
}
