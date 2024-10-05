import { useApp } from '@/src/stores/app/app.store'
import { View } from '../Themed'
import { styles } from './style'
import { TabApp } from './tab'

export const TabBar = ({ state, navigation }: any) => {
	const isMasterKey = useApp.use.state().isMasterKey

	return (
		<View style={styles.container}>
			{state.routes.map((screen: any, index: number) => {
				const isDisabled = screen.name === 'addSecrets' && !isMasterKey

				return (
					<TabApp
						key={screen.key}
						currentIndex={state.index}
						index={index}
						keyScreen={screen.name}
						navigation={navigation}
						disabled={isDisabled}
					/>
				)
			})}
		</View>
	)
}
