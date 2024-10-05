import { ButtonApp } from '@/src/simple/buttonApp/ButtonApp'
import { ModalApp } from '@/src/simple/modalApp/modalApp'
import { useApp } from '@/src/stores/app/app.store'
import { router } from 'expo-router'
import { Text } from '../Themed'
import { styles } from './style'

export const CreateMasterKeyModal = () => {
	const isMasterKey = useApp.use.state().isMasterKey

	const press = () => {
		router.push('/addMasterKey')
	}

	return (
		<ModalApp visible={!isMasterKey}>
			<Text style={styles.title}>Добро пожаловать</Text>
			<Text style={styles.text}>
				Для работы с секретами, Вам сначала необходимо добавить
			</Text>
			<Text style={styles.mk}>"Мастер Ключ"</Text>
			<ButtonApp
				title='Перейти к добавлению'
				variant='contained'
				color='success'
				onPress={press}
			/>
		</ModalApp>
	)
}
