import { ResultModalProps } from "../interfaces/ResultModalProps"
import { LegacyRef, useImperativeHandle, useRef } from "react"
import DialogHandle from "../types/DialogHandle";


export default function ResultModal({ref, result, targetTime}: ResultModalProps) {
	const dialogRef = useRef<HTMLDialogElement>();

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
			<p>You stopped the timer @ <strong>X seconds left</strong></p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	)
}