import { Header } from '@/src/components/header/header'
import { Text, View } from '@/src/components/Themed'
import { scale } from '@/src/constants/scaleSIzes'
import { ScrollView } from 'react-native'
import { styles } from './style'

export const AboutAppScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<Header title='О приложении' isBack />
			<View style={styles.textBox}>
				<Text style={styles.welcome}>Добро пожаловать в приложение</Text>
				<Text style={styles.appName}>Secret Keys</Text>

				<Text style={styles.text}>
					Приложение разработано таким образом, что бы максимально сохранить
					ваши секретные данные. В приложении отсутствуют какие-либо сетевые
					запросы, что минимизирует потерю данных. Доступ к данным вы будете
					получать через <Text style={styles.boldText}>"Мастер ключ"</Text> или
					используя <Text style={styles.boldText}>биометрию</Text>.
				</Text>

				<Text style={styles.text}>
					Так как приложение не зависит от интернета, оно будет с вами в любой
					момент, что позволит быстро им воспользоваться и вспомнить ваши
					секретики, которые вы возможно подзабыли &#128521;
				</Text>

				<Text style={[styles.text, { fontSize: scale(18) }]}>
					Все что нужно сделать что бы начать пользоваться приложением:
				</Text>

				<Text style={styles.points}>
					&bull;Добавить <Text style={styles.boldText}>"Мастер ключ"</Text>. C
					его помощью вы сможете получить доступ к своим созданным секретам.
				</Text>

				<Text style={styles.points}>
					&bull;Добавить <Text style={styles.boldText}>секрет</Text>. Задайте
					название вашей карточке с секретом и впишите ваш секрет. Мы его
					сохраним)
				</Text>

				<Text style={styles.points}>
					&bull;Для доступа к своим секретам вы можете в любой момент открыть
					приложение, нажать иконку замочка, в карточке которую хотите узнать и
					подтвердить свою личность используя биометрию или "Мастер ключ".
				</Text>
			</View>
		</ScrollView>
	)
}
