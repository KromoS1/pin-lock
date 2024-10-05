import { create } from 'zustand'
import { createSelectors } from '../createSelectors'

import { ActionsType, AppStateType, StateType } from './type'

export const init: AppStateType = {
	isOpenModal: false,
}

export const useAppBase = create<StateType & ActionsType>(set => ({
	state: init,
	setIsOpenModal: (isOpenModal: boolean) =>
		set(store => {
			return { state: { ...store.state, isOpenModal } }
		}),
}))

export const useApp = createSelectors(useAppBase)
