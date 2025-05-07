import React from "react"


export interface ResultModalProps {
	result: string,
	targetTime: number,
	ref: React.LegacyRef<HTMLDialogElement>
}