import { Text, View } from '@/src/components/Themed'
import { FC, memo } from 'react'
import { styles } from './style'

export const HomeScreen: FC = memo(() => {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
		</View>
	)
})
