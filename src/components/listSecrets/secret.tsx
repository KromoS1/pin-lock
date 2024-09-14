import { COLORS } from '@/src/constants/colorsApp'
import { SecretsType } from '@/src/types/pin.type'
import { Octicons } from '@expo/vector-icons'
import { FC, memo } from 'react'
import { Text, View } from '../Themed'
import { styles } from './style'

type PropsType = {
	secret: SecretsType
}

export const Secret: FC<PropsType> = memo(({ secret }) => {
	return (
		<View style={styles.secret}>
			<View>
				<Text>{secret.title}</Text>
				<Text>{secret.createdAt}</Text>
			</View>
			<View>
				<Octicons name={'lock'} color={COLORS.greenL} size={30} />
			</View>
		</View>
	)
})
