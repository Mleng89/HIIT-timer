import React, { useState, useEffect } from 'react';
import './App.css';
export default function Timer() {
	const [time, setTime] = useState(0);
	const [newTime, setNewTime] = useState(0);
	const [message, setMessage] = useState(false);

	const handleClickOnTimer = (e) => {
		e.preventDefault();
		const time = e.target.innerHTML;
		console.log(time);
		if (time === '20 Seconds') {
			setTime(20);
		}
		if (time === '45 Seconds') {
			setTime(45);
		}
	};
	const handleClickCoolTimer = (e) => {
		e.preventDefault();
		const time = e.target.innerHTML;
		console.log(time);
		if (time === '5 Seconds') {
			setNewTime(5);
		}
		if (time === '15 Seconds') {
			setNewTime(15);
		}
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
				setTime(0);
				setNewTime(0);
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
			<div className='message'>
				<h1>{message ? 'COOL   DOWN   TIME' : 'WORK   OUT   TIME'}</h1>
			</div>
			<div className='timer'>
				<h1>Timer: {message ? `00:${fullNewTime}` : `00:${fullTime}`}</h1>
			</div>
			<div>
				<h1>On timers:</h1>
				<button onClick={handleClickOnTimer} value='20' type='submit'>
					20 Seconds
				</button>
				<button onClick={handleClickOnTimer} value='45' type='submit'>
					45 Seconds
				</button>
			</div>
			<div>
				<h1>Cooldown options:</h1>
				<button onClick={handleClickCoolTimer} type='submit'>
					5 Seconds
				</button>
				<button onClick={handleClickCoolTimer} type='submit'>
					15 Seconds
				</button>
			</div>
		</>
	);
}
