import { Header } from '@/src/components/header/header'
import { MasterKeyModal } from '@/src/components/masterKeyModal/masterKeyModal'
import { Text, View } from '@/src/components/Themed'
import { useBoolean } from '@/src/hooks'
import { useApp } from '@src/stores/app/app.store'
import { Link } from 'expo-router'
import { FC, memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './style'

export const SettingsScreen: FC = memo(() => {
	const isMasterKey = useApp.use.state().isMasterKey
	const visible = useBoolean()

	const linkPathAddOrChangeMasterKeyScreen = isMasterKey
		? '/changeMasterKey'
		: '/addMasterKey'
	const nameLink = `${isMasterKey ? 'Изменить' : 'Добавить'} мастер ключ`

	return (
		<View style={styles.container}>
			<Header title='Настройки' />
			<MasterKeyModal visible={visible.value} close={visible.setFalse} />
			<View style={styles.listBox}>
				<Link href={'/aboutApp'} asChild>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.text}>О приложении</Text>
					</TouchableOpacity>
				</Link>

				<Link href={linkPathAddOrChangeMasterKeyScreen} asChild>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.text}>{nameLink}</Text>
					</TouchableOpacity>
				</Link>

				<TouchableOpacity style={styles.button} onPress={visible.setTrue}>
					<Text style={styles.text}>Удалить все секреты</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
})
