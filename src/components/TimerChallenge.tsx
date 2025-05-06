import TimerChallengeProps from "../interfaces/TimerChallengeProps"
import { useState } from 'react';


export default function TimerChallenge({title, targetTime}: TimerChallengeProps) {
	const [timerStarted, setTimerStarted] = useState<Boolean>(false);
	const [timerExpired, setTimerExpired] = useState<Boolean>(false);

	function handleStart() {
		setTimeout(() => {
			setTimerExpired(true)
		}, targetTime * 1000)

		setTimerStarted(true);
	}

	return (
		<section className="challenge">
			<h2>{title}</h2>
			{timerExpired && <p>YOU LOST!</p>}
			<p className="challenge-time">
				{targetTime} second{targetTime > 1? 's' : ''}
			</p>
			<p>
				<button onClick={handleStart}>
					{timerStarted ? 'Stop' : 'Start'} Challenge
				</button>
			</p>
			<p className={timerStarted ? 'active' : undefined}>
				{timerStarted ? 'Time is running ...' : 'Timer inactive'}
			</p>
		</section>
	)
}