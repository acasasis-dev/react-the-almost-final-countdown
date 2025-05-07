import TimerChallengeProps from "../interfaces/TimerChallengeProps"
import { useState, useRef, LegacyRef } from 'react';
import ResultModal from "./ResultModal";


export default function TimerChallenge({title, targetTime}: TimerChallengeProps) {
	const [timerStarted, setTimerStarted] = useState<Boolean>(false);
	const [timerExpired, setTimerExpired] = useState<Boolean>(false);

	const timer = useRef<number>();
	const resultModalDialog = useRef<HTMLDialogElement>();

	function handleStart() {
		timer.current = setTimeout(() => {
			setTimerExpired(true)
			resultModalDialog.current!.showModal()
		}, targetTime * 1000)

		setTimerStarted(true);
	}

	function handleStop() {
		clearTimeout(timer.current);
	}

	return (
		<>
			<ResultModal ref={resultModalDialog as LegacyRef<HTMLDialogElement>} result="LOST" targetTime={targetTime} />
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1? 's' : ''}
				</p>
				<p>
					<button onClick={timerStarted ? handleStop : handleStart}>
						{timerStarted ? 'Stop' : 'Start'} Challenge
					</button>
				</p>
				<p className={timerStarted ? 'active' : undefined}>
					{timerStarted ? 'Time is running ...' : 'Timer inactive'}
				</p>
			</section>
		</>
	)
}