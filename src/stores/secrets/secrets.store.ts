import { create } from 'zustand'

import { KeySS } from '@/src/constants/keySS'
import { SecretsType } from '@/src/types/pin.type'
import { DayjsApp } from '@/src/utils/dayjsApp'
import { SS } from '@/src/utils/secureStorage'
import { randomString } from '@/src/utils/tandom'
import { createSelectors } from '../createSelectors'
import { ActionsType, SecretsStateType, StateType } from './type'

export const init: SecretsStateType = {
	showSecret: null,
	secrets: [],
}

const useSecretBase = create<StateType & ActionsType>(set => ({
	state: init,
	setShowSecret: (showSecret: SecretsType | null) =>
		set(store => {
			return { state: { ...store.state, showSecret } }
		}),
	addSecrets: (secrets: SecretsType[]) =>
		set(store => {
			return { state: { ...store.state, secrets } }
		}),
	addSecret: (secret: Omit<SecretsType, 'id' | 'createdAt'>) =>
		set(store => {
			const newSecret = {
				id: randomString(12),
				createdAt: DayjsApp(new Date()).format('DD.MM.YYYY HH:mm:ss'),
				...secret,
			}

			const newSecrets = [newSecret, ...store.state.secrets]

			SS.set(KeySS.codes, JSON.stringify(newSecrets))

			return { state: { ...store.state, secrets: newSecrets } }
		}),
}))

export const useSecret = createSelectors(useSecretBase)
