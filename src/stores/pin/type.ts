import { PinType } from '@/src/types/pin.type'

export type StateType = {
	state: PinType[]
}

export type ActionsType = {
	addPins: (pins: PinType[]) => void
	addPin: (pin: Omit<PinType, 'id' | 'createdAt'>) => void
}
