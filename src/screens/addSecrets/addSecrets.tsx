import { AddSecretForm } from '@/src/components/addSecretForm/addSecretForm'
import { Header } from '@/src/components/header/header'
import { View } from '@/src/components/Themed'
import { FC, memo } from 'react'
import { styles } from '../home/style'

export const AddSecretsScreen: FC = memo(() => {
	return (
		<View style={styles.container}>
			<Header title={'Добавление секрета'} />
			<AddSecretForm />
		</View>
	)
})
