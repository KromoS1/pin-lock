import { AddSecret } from '@/src/components/addSecret/addSecret'
import { Header } from '@/src/components/header/header'
import { View } from '@/src/components/Themed'
import { DarkBG } from '@/src/simple/darkBG/darkBG'
import { FC, memo } from 'react'
import { styles } from './style'

export const HomeScreen: FC = memo(() => {
	return (
		<View style={styles.container}>
			<Header />
			<DarkBG />
			<AddSecret />
		</View>
	)
})
