import { Ref } from "react"
import DialogHandle from "../types/DialogHandle"


export interface ResultModalProps {
	targetTime: number,
	remainingTime: number,
	ref: Ref<DialogHandle>
}