import React, { useState, useEffect } from 'react';

export default function Timer() {
	const [time, setTime] = useState(45);
	const [newTime, setNewTime] = useState(15);
	const [message, setMessage] = useState(false);
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
		if (time === 0) {
			setMessage(true);
			const coolCountDown =
				newTime > 0 && setInterval(() => setNewTime(newTime - 1), 1000);
			if (newTime === 0) {
				setMessage(false);
				setTime(45);
				setNewTime(15);
			}
			return () => clearInterval(coolCountDown);
		}

		return () => clearInterval(countDown);
	}, [time, newTime]);
	let fullTime = time < 10 ? `0${time}` : time;
	let fullNewTime = newTime < 10 ? `0${newTime}` : newTime;
	return (
		<>
			{/* <form onSubmit={handleClick}>
				<label> Enter your time: </label>
				<input
					id='time'
					name='time'
					type='text'
					placeholder='45'
					onChange={handleChange}
				/>
				<input type='submit' value='Submit' />
				<label> Enter your cool down time: </label>
				<input
					id='cdtime'
					name='cdtime'
					type='text'
					value={newTime}
					onChange={handleChange2}
				/>
			</form> */}
			<div>
				<h1>{message ? 'COOL   DOWN   TIME' : 'WORK   OUT   TIME'}</h1>
			</div>
			<h1>Timer: {message ? `00:${fullNewTime}` : `00:${fullTime}`}</h1>
		</>
	);
}
