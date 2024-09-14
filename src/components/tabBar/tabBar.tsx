import { View } from '../Themed'
import { styles } from './style'
import { TabApp } from './tab'

export const TabBar = ({ state, navigation }: any) => {
	return (
		<View style={styles.container}>
			{state.routes.map((screen: any, index: number) => {
				return (
					<TabApp
						key={screen.key}
						currentIndex={state.index}
						index={index}
						keyScreen={screen.name}
						navigation={navigation}
					/>
				)
			})}
		</View>
	)
}
