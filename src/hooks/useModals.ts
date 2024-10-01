import { MutableRefObject, useCallback, useRef, useState } from 'react'
import { useApp } from '../stores/app/app.store'

export type AllModalsType = 'clearSecrets'

export type BottomSheetRefType = {
	isActive: () => boolean
	scrollTo: (scrollValue: number) => void
	putMax: (modal: AllModalsType | undefined) => number
}

export const useModals = () => {
	const [modal, setModal] = useState<AllModalsType | undefined>()
	const setIsOpenModal = useApp.use.setIsOpenModal()

	const refs: {
		[key in AllModalsType]: MutableRefObject<BottomSheetRefType | null>
	} = {
		clearSecrets: useRef(null),
	}

	const toggleModal = useCallback(
		(
			modalNew: AllModalsType | undefined,
			ref: MutableRefObject<BottomSheetRefType | null>
		) => {
			if (!ref) return

			if (modal) {
				refs[modal]?.current?.scrollTo(0)
			}

			setModal(modalNew)

			setTimeout(() => {
				const isActive = ref.current?.isActive()

				const maxY = ref.current?.putMax(modalNew) || -300
				if (isActive) {
					ref.current?.scrollTo(0)
					setIsOpenModal(false)
				} else {
					ref.current?.scrollTo(maxY)
					setIsOpenModal(true)
				}
			}, 300)
		},
		[modal]
	)

	const onClose = useCallback(() => {
		if (modal) {
			refs[modal]?.current?.scrollTo(0)
			setModal(undefined)
			setIsOpenModal(false)
		}
	}, [modal])

	return {
		refs,
		modal,
		toggleModal,
		onClose,
	}
}
