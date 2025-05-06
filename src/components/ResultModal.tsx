import { ResultModalProps } from "../interfaces/ResultModalProps"


export default function ResultModal({result, targetTime}: ResultModalProps) {
	return (
		<dialog className="result-modal" open>
			<h2>YOU {result}</h2>
			<p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
			<p>You stopped the timer @ <strong>X seconds left</strong></p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	)
}