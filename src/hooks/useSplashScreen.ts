import { SplashScreen } from 'expo-router'
import { useEffect } from 'react'
import { useBoolean } from './useBoolean'

SplashScreen.preventAutoHideAsync()

export const useSplashScreen = () => {
	const isReady = useBoolean()

	useEffect(() => {
		setTimeout(() => {
			isReady.setTrue()
		}, 2000)
	}, [])

	useEffect(() => {
		if (isReady.value) {
			SplashScreen.hideAsync()
		}
	}, [isReady.value])

	return isReady.value
}
