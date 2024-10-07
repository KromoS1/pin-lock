import { FC } from 'react'
import { Image } from 'react-native'
import { View } from '../Themed'
import { styles } from './style'
//@ts-ignore
import Logo from '../../../assets/images/logo.png'

export const SplashScreenApp: FC = () => {
	return (
		<View style={styles.container}>
			<Image source={Logo} />
		</View>
	)
}
