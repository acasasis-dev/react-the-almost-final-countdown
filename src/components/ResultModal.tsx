import { ResultModalProps } from "../interfaces/ResultModalProps"
import { LegacyRef, useImperativeHandle, useRef } from "react"
import DialogHandle from "../types/DialogHandle";


export default function ResultModal({ref, targetTime, remainingTime, onReset}: ResultModalProps) {
	const dialogRef = useRef<HTMLDialogElement>();

	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
	const isUserLost = +formattedRemainingTime <= 0;
	const result = isUserLost? "LOST" : "WON";

	useImperativeHandle(ref, (): DialogHandle => {
		return {
			open() {
				return dialogRef.current!.showModal()
			}
		}
	})

	return (
		<dialog ref={dialogRef as LegacyRef<HTMLDialogElement>} className="result-modal">
			<h2>YOU {result}</h2>
			<p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
			<p>You stopped the timer @ <strong>{formattedRemainingTime} seconds left</strong></p>
			<form method="dialog" onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>
	)
}