import React from "react"
import { LegacyRef } from "react"


export interface ResultModalProps {
	result: string,
	targetTime: number,
	ref: LegacyRef<HTMLDialogElement>
}