import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'

import { useColorScheme } from '@/src/components/useColorScheme'
import { useDataSS } from '@src/hooks'
import { Alert } from 'react-native'
import { setJSExceptionHandler } from 'react-native-exception-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RNRestart from 'react-native-restart'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SplashScreenApp } from '../components/splashScreen/splashScreenApp'
import { useInitFont } from '../hooks/useInitFont'
import { useInitLocalAuth } from '../hooks/useLocalAuth'
import { useSplashScreen } from '../hooks/useSplashScreen'

export { ErrorBoundary } from 'expo-router'

// export const unstable_settings = {
// 	// Ensure that reloading on `/modal` keeps a back button present.
// 	initialRouteName: '(home)',
// }

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
	useDataSS()
	useInitLocalAuth()
	const loaded = useInitFont()

	const isReady = useSplashScreen()

	const errorHandler = (e: any, isFatal: boolean) => {
		if (isFatal) {
			Alert.alert(`${e.name} ${e.message}`)
			RNRestart.Restart()
		}
	}

	setJSExceptionHandler(errorHandler)

	if (!loaded || !isReady) {
		return <SplashScreenApp />
	}

	return <RootLayoutNav />
}

function RootLayoutNav() {
	const colorScheme = useColorScheme()

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
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
			</SafeAreaProvider>
		</GestureHandlerRootView>
	)
}
