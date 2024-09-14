import { TabBar } from '@/src/components/tabBar/tabBar'
import { Tabs } from 'expo-router'

export default function TabLayout() {
	return (
		<Tabs
			tabBar={props => <TabBar {...props} />}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen name='index' />
			<Tabs.Screen name='addSecrets' />
			<Tabs.Screen name='settings' />
		</Tabs>
	)
}
