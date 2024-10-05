import { scale } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	modalText: {
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontSize: scale(16),
		fontWeight: '700',
		color: 'black',
	},
	btns: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: scale(16),
	},
})
