import { FC, memo, PropsWithChildren } from 'react'
import { Text, View } from '../Themed'
import { styles } from './style'

type PropsType = {
	tintColor?: string
}

export const Header: FC<PropsWithChildren<PropsType>> = memo(() => {
	return (
		<View style={styles.container}>
			<Text>Header</Text>
		</View>
	)
})
