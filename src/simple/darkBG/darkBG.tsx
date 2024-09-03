import { View } from '@/src/components/Themed'
import { useApp } from '@/src/stores/app/app.store'
import { FC, memo } from 'react'
import { styles } from './style'

export const DarkBG: FC = memo(() => {
	const isOpenModal = useApp.use.state().isOpenModal

	return isOpenModal ? <View style={styles.container} /> : <></>
})
