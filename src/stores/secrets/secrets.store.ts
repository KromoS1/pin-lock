import { create } from 'zustand'

import { KeySS } from '@/src/constants/keySS'
import { SecretsType } from '@/src/types/pin.type'
import { DayjsApp } from '@/src/utils/dayjsApp'
import { SS } from '@/src/utils/secureStorage'
import { randomString } from '@/src/utils/tandom'
import { createSelectors } from '../createSelectors'
import { ActionsType, StateType } from './type'

export const init: SecretsType[] = []

const useSecretBase = create<StateType & ActionsType>(set => ({
	state: init,
	addSecrets: (secrets: SecretsType[]) =>
		set(() => {
			return { state: secrets }
		}),
	addSecret: (secret: Omit<SecretsType, 'id' | 'createdAt'>) =>
		set(store => {
			const newSecret = {
				id: randomString(12),
				createdAt: DayjsApp(new Date()).format('DD.MM.YYYY HH:mm:ss'),
				...secret,
			}

			const newState = [newSecret, ...store.state]

			SS.set(KeySS.codes, JSON.stringify(newState))

			return { state: newState }
		}),
}))

export const useSecret = createSelectors(useSecretBase)
