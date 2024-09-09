import { APP_PADDING } from '@/src/constants/scaleSIzes'
import { useSecret } from '@/src/stores/secrets/secrets.store'
import { SecretsType } from '@/src/types/pin.type'
import { useCallback } from 'react'
import { FlatList } from 'react-native'
import { Secret } from './secret'

export const ListSecrets = () => {
	const secrets = useSecret.use.state()

	const renderItem = useCallback(
		({ item }: { item: SecretsType }) => {
			return <Secret secret={item} />
		},
		[secrets]
	)

	return (
		<FlatList
			data={secrets}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			style={{ paddingHorizontal: APP_PADDING }}
		/>
	)
}
