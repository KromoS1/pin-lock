import React from 'react';
import {APP_PADDING} from "@src/constants/scaleSIzes";
import {Text, View} from "@src/components/Themed";
import {Controller} from "react-hook-form";
import {InputApp} from "@src/simple/inputApp/InputApp";
import {ButtonApp} from "@src/simple/buttonApp/ButtonApp";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {
  AddAndChangeMasterKeyType,
  useAddAndChangeMasterKeyForm,
} from "@src/components/addAndChangeMasterKeyForm/model";
import {useBoolean} from "@src/hooks";
import {useRouter} from "expo-router";
import {useApp} from "@src/stores/app/app.store";
import {SS} from "@src/utils/secureStorage";
import {KeySS} from "@src/constants/keySS";
import { styles } from './styles';


export const AddAndChangeMasterKeyForm = () => {
  const isMasterKey = useApp.use.state().isMasterKey
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useAddAndChangeMasterKeyForm()

  const showSecret = useBoolean()
  const { back } = useRouter()
  const setIsMasterKey = useApp.use.setIsMasterKey()

  const submit = async (data: AddAndChangeMasterKeyType) => {
    setIsMasterKey(true)
    await SS.set(KeySS.masterKey, data.masterKey)
    back()
  }

  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        paddingHorizontal: APP_PADDING,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Мастер ключ нужен для последующего доступа к вашим секретам. Ни кому его не передавайте.
        </Text>
        <View style={styles.form}>
          <View style={{gap: 36}}>
            <Controller
              control={control}
              name='masterKey'
              render={({field: {value, onChange}}) => {
                return (
                  <InputApp
                    secureTextEntry={!showSecret.value}
                    placeholder='Введите мастер ключ'
                    textError={errors?.masterKey?.message}
                    value={value}
                    onChangeText={value => onChange(value)}
                  />
                )
              }}
            />
            <Controller
              name='confirmMasterKey'
              control={control}
              render={({field: {value, onChange}}) => {
                return (
                  <InputApp
                    secureTextEntry={!showSecret.value}
                    placeholder='Повторите мастер ключ'
                    textError={errors?.confirmMasterKey?.message}
                    value={value}
                    onChangeText={value => onChange(value)}
                  />
                )
              }}
            />
          </View>
          <ButtonApp
            disabled={!isValid}
            title={isMasterKey ? 'Изменить' : 'Добавить'}
            variant='contained'
            color='success'
            onPress={handleSubmit(submit)}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
