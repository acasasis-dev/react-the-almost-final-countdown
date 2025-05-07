import TimerChallengeProps from "../interfaces/TimerChallengeProps"
import { useState, useRef, Ref } from 'react';
import ResultModal from "./ResultModal";
import DialogHandle from "../types/DialogHandle";


export default function TimerChallenge({title, targetTime}: TimerChallengeProps) {
	const [timerStarted, setTimerStarted] = useState<Boolean>(false);
	const [timerExpired, setTimerExpired] = useState<Boolean>(false);

	const timer = useRef<number>();
	const resultModalDialog = useRef<DialogHandle>();

	function handleStart() {
		timer.current = setTimeout(() => {
			setTimerExpired(true)
			resultModalDialog.current!.open()
		}, targetTime * 1000)

		setTimerStarted(true);
	}

	function handleStop() {
		clearTimeout(timer.current);
	}

	return (
		<>
			<ResultModal ref={resultModalDialog as Ref<DialogHandle>} result="LOST" targetTime={targetTime} />
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