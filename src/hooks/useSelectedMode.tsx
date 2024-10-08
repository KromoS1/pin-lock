import { useCallback, useState } from 'react'
import { useBoolean } from './useBoolean'

export const useSelectedMode = () => {
	const selectMode = useBoolean()
	const [selectedSecret, setSelectedSecret] = useState<string[]>([])

	const setSelectSecret = useCallback((secretId: string) => {
		setSelectedSecret(prev =>
			prev.includes(secretId)
				? prev.filter(id => id !== secretId)
				: [...prev, secretId]
		)
	}, [])

	const offSelectMode = () => {
		selectMode.setFalse()
		setSelectedSecret([])
	}

	return {
		selectMode,
		selectedSecret,
		setSelectSecret,
		offSelectMode,
	}
}
