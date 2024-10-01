import { Header } from '@/src/components/header/header'
import { ListSecrets } from '@/src/components/listSecrets/listSecrets'
import { View } from '@/src/components/Themed'
import { FC, memo } from 'react'
import { styles } from './style'

export const HomeScreen: FC = memo(() => {
	return (
		<View style={styles.container}>
			<Header title='Список секретов' />
			<ListSecrets />
		</View>
	)
})
