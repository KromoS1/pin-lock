import FontAwesome from '@expo/vector-icons/FontAwesome'
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@/src/components/useColorScheme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { KeySS } from '../constants/keySS'
import { useSecret } from '../stores/secrets/secrets.store'
import { SS } from '../utils/secureStorage'

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router'

// export const unstable_settings = {
// 	// Ensure that reloading on `/modal` keeps a back button present.
// 	initialRouteName: '(home)',
// }

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	})

	const addSecrets = useSecret.use.addSecrets()

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	useEffect(() => {
		;(async () => {
			const secretsString = (await SS.get(KeySS.codes)) as string
			try {
				if (secretsString) {
					const secrets = JSON.parse(secretsString)
					addSecrets(secrets)
				}
			} catch (e) {
				console.log(e)
			}
		})()
	}, [])

	if (!loaded) {
		return null
	}

	return <RootLayoutNav />
}

function RootLayoutNav() {
	const colorScheme = useColorScheme()

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
					</Stack>
				</ThemeProvider>
			</GestureHandlerRootView>
		</SafeAreaProvider>
	)
}
