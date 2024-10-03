import {Header} from '@/src/components/header/header'
import {Text, View} from '@/src/components/Themed'
import {Link} from 'expo-router'
import {FC, memo} from 'react'
import {TouchableOpacity} from 'react-native'
import {styles} from './style'
import {useApp} from "@src/stores/app/app.store";

export const SettingsScreen: FC = memo(() => {
  const isMasterKey = useApp.use.state().isMasterKey
  return (
    <View style={styles.container}>
      <Header title='Настройки'/>
      <View style={styles.listBox}>
        <Link href={'/aboutApp'} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>О приложении</Text>
          </TouchableOpacity>
        </Link>

        {isMasterKey ? (
          <Link href={'/changeMasterKey'} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Изменить мастер ключ</Text>
            </TouchableOpacity>
          </Link>
          )
          : (
            <Link href={'/addMasterKey'} asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Добавить мастер ключ</Text>
              </TouchableOpacity>
            </Link>
          )
        }


        <Link href={'/clearSecretsModal'} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Удалить все секреты</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
})
