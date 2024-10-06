import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import 'react-native-reanimated'

import { useColorScheme } from '@/src/components/useColorScheme'
import { useBoolean, useDataSS } from '@src/hooks'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useInitFont } from '../hooks/useInitFont'
import { useInitLocalAuth } from '../hooks/useLocalAuth'

export { ErrorBoundary } from 'expo-router'

// export const unstable_settings = {
// 	// Ensure that reloading on `/modal` keeps a back button present.
// 	initialRouteName: '(home)',
// }

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	useDataSS()
	useInitLocalAuth()
	const loaded = useInitFont()

	if (!loaded) {
		return null
	}

	return <RootLayoutNav />
}

function RootLayoutNav() {
	const colorScheme = useColorScheme()
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

	if (!isReady.value) {
		return null
	}

	return (
		<SafeAreaProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<ThemeProvider
					value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
				>
					<Stack
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen name='(tabs)' />
						<Stack.Screen name='aboutApp' />
						<Stack.Screen name='addMasterKey' />
						<Stack.Screen name='changeMasterKey' />

						<Stack.Screen
							name='clearSecretsModal'
							options={{
								presentation: 'modal',
							}}
						/>
					</Stack>
				</ThemeProvider>
			</GestureHandlerRootView>
		</SafeAreaProvider>
	)
}
