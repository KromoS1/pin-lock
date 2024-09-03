import { COLORS } from '@/src/constants/colorsApp'
import { useMapModals } from '@/src/hooks/useModals'
import { BottomSheet } from '@/src/simple/bottomSheet/bottomSheet'
import { FeatherIcon } from '@/src/simple/icons'
import { useApp } from '@/src/stores/app/app.store'
import React, { FC, memo } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, View } from '../Themed'
import { styles } from './style'

export const AddPin: FC = memo(() => {
	const { modal, toggleModal, refs, onClose } = useMapModals()

	const setIsOpenModal = useApp.use.setIsOpenModal()
	const open = () => {
		toggleModal('addPin', refs.addPin)
		setIsOpenModal(true)
	}

	return (
		<>
			<View style={styles.container}>
				<TouchableOpacity onPress={open}>
					<FeatherIcon color={COLORS.mainGreen} name='plus-circle' size={48} />
				</TouchableOpacity>
			</View>
			<BottomSheet ref={refs.addPin} isScroll={false}>
				{modal === 'addPin' && (
					<TouchableOpacity onPress={onClose}>
						<Text>Pin</Text>
					</TouchableOpacity>
				)}
			</BottomSheet>
		</>
	)
})
