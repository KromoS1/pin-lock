import { COLORS } from '@/src/constants/colorsApp'
import { FeatherIcon } from '@/src/simple/icons'
import { useRouter } from 'expo-router'
import { FC, memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from '../Themed'
import { styles } from './style'

type PropsType = {
	title: string
	isBack?: boolean
}

export const Header: FC<PropsType> = memo(({ title, isBack }) => {
	const { canGoBack, back } = useRouter()

	const canBack = canGoBack()

	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				{canBack && isBack && (
					<TouchableOpacity onPress={back} style={styles.back}>
						<FeatherIcon color={COLORS.white} name='arrow-left' />
					</TouchableOpacity>
				)}
				<View style={[styles.title, !isBack && { flexBasis: '100%' }]}>
					<Text style={styles.text}>{title}</Text>
				</View>
			</View>
		</View>
	)
})
