import { Header } from '@/src/components/header/header'
import { StyleSheet, Text, View } from 'react-native'

export default function Tab() {
	return (
		<View style={styles.container}>
			<Header title={'Добавление секрета'} />
			<Text>Tab [Home|Settings]</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
