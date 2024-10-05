import { create } from 'zustand'
import { createSelectors } from '../createSelectors'

import { ActionsType, AppStateType, StateType } from './type'

export const init: AppStateType = {
	isOpenModal: false,
	isMasterKey: false,
	masterKeyModal: false,
}

export const useAppBase = create<StateType & ActionsType>(set => ({
	state: init,
	setIsOpenModal: (isOpenModal: boolean) =>
		set(store => {
			return { state: { ...store.state, isOpenModal } }
		}),
	setIsMasterKey: (isMasterKey: boolean) =>
		set(store => {
			return { state: { ...store.state, isMasterKey } }
		}),
	setMasterKeyModal: (masterKeyModal: boolean) =>
		set(store => {
			return { state: { ...store.state, masterKeyModal } }
		}),
}))

export const useApp = createSelectors(useAppBase)
