import { useFocusEffect, useNavigation } from 'expo-router'
import { useCallback, useEffect } from 'react'
import { useBoolean } from './useBoolean'

export const useVisibleFocus = (): boolean => {
	const nav = useNavigation()
	const { value, setTrue, setFalse } = useBoolean()

	const blurScreenHandler = useCallback(() => {
		setFalse()
	}, [])

	useEffect(() => {
		nav.addListener('blur', blurScreenHandler)

		return () => {
			nav.removeListener('blur', blurScreenHandler)
		}
	}, [])

	useFocusEffect(
		useCallback(() => {
			setTrue()
		}, [])
	)

	return value
}
