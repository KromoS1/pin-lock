import { COLORS } from '@/src/constants/colorsApp'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	box: {
		borderWidth: 1,
		borderColor: COLORS.grey,
		borderRadius: 8,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	activeBox: {
		borderColor: COLORS.darkGreen,
	},
	errorBox: {
		borderColor: COLORS.red,
	},
	input: {
		width: '85%',
		color: COLORS.black,
	},
	icon: {
		paddingHorizontal: 5,
	},
	error: {
		marginTop: 4,
		position: 'relative',
	},
	textError: {
		right: 5,
		color: COLORS.red,
		position: 'absolute',
	},
})
