import { COLORS } from '@/src/constants/colorsApp'
import { FeatherIcon } from '@/src/simple/icons'
import { useRouter } from 'expo-router'
import { FC, memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from '../Themed'
import { styles } from './style'

type PropsType = {
	title?: string
}

export const Header: FC<PropsType> = memo(({ title }) => {
	const { canGoBack, back } = useRouter()

	const canBack = canGoBack()

	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				{canBack && (
					<TouchableOpacity onPress={back} style={styles.back}>
						<FeatherIcon color={COLORS.white} name='arrow-left' />
					</TouchableOpacity>
				)}
				<View style={[styles.title, !canBack && { flexBasis: '100%' }]}>
					<Text>{title ? title : 'Header'}</Text>
				</View>
			</View>
		</View>
	)
})
