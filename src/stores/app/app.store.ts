import {create} from 'zustand'
import {createSelectors} from '../createSelectors'

import {ActionsType, AppStateType, StateType} from './type'

const init: AppStateType = {
	isOpenModal: false,
	isMasterKey: false
}

const useAppBase = create<StateType & ActionsType>(set => ({
	state: init,
	setIsOpenModal: (isOpenModal: boolean) =>
		set(store => {
			return { state: { ...store.state, isOpenModal } }
		}),
	setIsMasterKey: (isMasterKey: boolean) =>
		set(store => {
			return{ state: {...store.state, isMasterKey}}
		})
}))

export const useApp = createSelectors(useAppBase)
