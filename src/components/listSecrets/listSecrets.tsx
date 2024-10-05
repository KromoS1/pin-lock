import { APP_PADDING } from '@/src/constants/scaleSIzes'
import { useSecret } from '@/src/stores/secrets/secrets.store'
import { SecretsType } from '@/src/types/pin.type'
import { memo, useCallback } from 'react'
import { FlatList, View } from 'react-native'
import { Secret } from './secret'

export const ListSecrets = memo(() => {
	const secrets = useSecret.use.state().secrets

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
			ListHeaderComponent={() => <View style={{ height: 30 }} />}
			ListFooterComponent={() => <View style={{ height: 100 }} />}
			ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
			keyExtractor={item => item.id}
			style={{ paddingHorizontal: APP_PADDING }}
		/>
	)
})
