import TimerChallengeProps from "../interfaces/TimerChallengeProps"
import { useState, useRef, Ref } from 'react';
import ResultModal from "./ResultModal";
import DialogHandle  from "../types/DialogHandle";


export default function TimerChallenge({title, targetTime}: TimerChallengeProps) {
	const [timeRemaining, setTimeRemaining] = useState<number>(targetTime * 1000);

	const timer = useRef<number>();
	const resultModalDialog = useRef<DialogHandle>();
	const timerStarted = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	function handleStart() {
		timer.current = setInterval(() => {
			setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
		}, 10)
	}

	function handleStop() {
		clearInterval(timer.current);
		resultModalDialog.current!.open()
	}

	function handleReset() {
		setTimeRemaining(targetTime * 1000)
	}

	if(timeRemaining <= 0) {
		resultModalDialog.current!.open();
		handleStop()
	}

	return (
		<>
			<ResultModal 
				ref={resultModalDialog as Ref<DialogHandle>} 
				targetTime={targetTime} 
				remainingTime={timeRemaining}
				onReset={handleReset}
			/>
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