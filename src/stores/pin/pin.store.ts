import { create } from 'zustand'

import { PinType } from '@/src/types/pin.type'
import { DayjsApp } from '@/src/utils/dayjsApp'
import { randomString } from '@/src/utils/tandom'
import { createSelectors } from '../createSelectors'
import { ActionsType, StateType } from './type'

export const init: PinType[] = []

const usePinBase = create<StateType & ActionsType>(set => ({
	state: init,
	addPins: (pins: PinType[]) =>
		set(() => {
			return { state: pins }
		}),
	addPin: (pin: Omit<PinType, 'id' | 'createdAt'>) =>
		set(store => {
			const newPin = {
				id: randomString(12),
				createdAt: DayjsApp(new Date()).format('DD.MM.YYYY HH:mm:ss'),
				...pin,
			}

			return { state: [newPin, ...store.state] }
		}),
}))

export const usePin = createSelectors(usePinBase)
