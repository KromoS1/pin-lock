import {Header} from '@/src/components/header/header'
import {Text, View} from '@/src/components/Themed'
import {Link} from 'expo-router'
import {FC, memo} from 'react'
import {TouchableOpacity} from 'react-native'
import {styles} from './style'
import {useApp} from "@src/stores/app/app.store";

export const SettingsScreen: FC = memo(() => {
  const isMasterKey = useApp.use.state().isMasterKey

  const linkPathAddOrChangeMasterKeyScreen = isMasterKey ? '/changeMasterKey' : '/addMasterKey'
  const nameLink = `${isMasterKey ? "Изменить" : "Добавить"} мастер ключ`

  return (
    <View style={styles.container}>
      <Header title='Настройки'/>
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


        <Link href={'/clearSecretsModal'} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Удалить все секреты</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
})
