import { View } from '@/src/components/Themed'
import { COLORS } from '@/src/constants/colorsApp'
import { FC, memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { FeatherIcon } from '../icons'
import { styles } from './style'

type PropsType = {
	press: () => void
}

export const BtnAddPin: FC<PropsType> = memo(({ press }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={press}>
				<FeatherIcon color={COLORS.mainGreen} name='plus-circle' size={48} />
			</TouchableOpacity>
		</View>
	)
})
