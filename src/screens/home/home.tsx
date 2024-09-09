import { Header } from '@/src/components/header/header'
import { ListSecrets } from '@/src/components/listSecrets/listSecrets'
import { View } from '@/src/components/Themed'
import { BtnAddPin } from '@/src/simple/btnAddPin/btnAddPin'
import { useRouter } from 'expo-router'
import { FC, memo, useCallback } from 'react'
import { styles } from './style'

export const HomeScreen: FC = memo(() => {
	const { navigate } = useRouter()

	const open = useCallback(() => {
		navigate('/addSecrets')
	}, [navigate])

	return (
		<View style={styles.container}>
			<Header />
			<BtnAddPin press={open} />
			<ListSecrets />
		</View>
	)
})
