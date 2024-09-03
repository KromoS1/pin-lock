import { FC, memo } from 'react'
import { Text, View } from '../Themed'
import { styles } from './style'

export const Header: FC = memo(() => {
	return (
		<View style={styles.container}>
			<Text>Header</Text>
		</View>
	)
})
