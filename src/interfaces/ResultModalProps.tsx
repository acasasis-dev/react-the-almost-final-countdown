import { Ref } from "react"
import DialogHandle from "../types/DialogHandle"


export interface ResultModalProps {
	result: string,
	targetTime: number,
	ref: Ref<DialogHandle>
}