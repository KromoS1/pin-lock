import {APP_PADDING} from '@/src/constants/scaleSIzes'
import {useSecret} from '@/src/stores/secrets/secrets.store'
import {SecretsType} from '@/src/types/pin.type'
import {memo, useCallback, useState} from 'react'
import {FlatList, View} from 'react-native'
import {Secret} from './secret'
import {ButtonApp} from "@src/simple/buttonApp/ButtonApp";
import {useLocalAuth} from "@src/hooks/useLocalAuth";
import {useBiometrics} from "@src/stores/biometrics/biometrics.store";
import {useApp} from "@src/stores/app/app.store";
import {styles} from './style'

export const ListSecrets = memo(() => {
	const secrets = useSecret.use.state().secrets
	const setMasterKeyModal = useApp.use.setMasterKeyModal()
	const deleteSecret = useSecret.use.deleteSecrets()

	const { checkFinger } = useLocalAuth()

	const { fingerprint, isBiometricSupported } =
		useBiometrics.use.state()

  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false)
	const [deleteSecretsList, setDeleteSecretsList] = useState<string[]>([])

	const onShowDeleteMode = () => {
		setIsDeleteMode(prev => !prev)
	}
	const selectDeleteSecret = (secretId: string) => {
		setDeleteSecretsList(prev => prev.includes(secretId)
			? prev.filter(id => id !== secretId)
			: [...prev, secretId])
	}

	const cancelDeleteActionsModeHandler = () => {
		onShowDeleteMode()
		setDeleteSecretsList([])
	}

	const deleteSecretsHandler = async () => {

		if(!deleteSecretsList.length) return

		if (fingerprint && isBiometricSupported) {
			await checkFinger()
			deleteSecret(deleteSecretsList)
			onShowDeleteMode()
		} else {
			setMasterKeyModal(true)
			deleteSecret(deleteSecretsList)
			onShowDeleteMode()
		}
	}
	console.log('deleteSecretsList',deleteSecretsList)
	const renderItem = useCallback(
		({ item }: { item: SecretsType }) => {
			const isSelected = deleteSecretsList.includes(item.id)

			return <Secret secret={item} isDeleteMode={isDeleteMode} isSelected={isSelected} onShowDeleteMode={onShowDeleteMode} selectDeleteSecret={selectDeleteSecret} />
		},
		[secrets, isDeleteMode, deleteSecretsList]
	)

  const renderDeleteActions = () => {
    return (
      <View style={styles.deleteActionsButtonContainer}>
        {isDeleteMode && (
          <>
          <ButtonApp containerStyles={{flexBasis: '30%'}} onPress={cancelDeleteActionsModeHandler} title={'Отмени'}/>
          <ButtonApp onPress={deleteSecretsHandler} containerStyles={{flexBasis: '30%'}} title={'Удалить'}/>
          </>
        )}
      </View>
    )
  }

	return (
		<FlatList
			data={secrets}
			renderItem={renderItem}
			ListHeaderComponent={renderDeleteActions}
			ListFooterComponent={() => <View style={{ height: 100 }} />}
			ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
			keyExtractor={item => item.id}
			style={{ paddingHorizontal: APP_PADDING }}
		/>
	)
})
