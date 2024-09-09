import { SecretsType } from '@/src/types/pin.type'

export type StateType = {
	state: SecretsType[]
}

export type ActionsType = {
	addSecrets: (pins: SecretsType[]) => void
	addSecret: (pin: Omit<SecretsType, 'id' | 'createdAt'>) => void
}
