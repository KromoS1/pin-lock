import { SecretsType } from '@/src/types/pin.type'

export type SecretsStateType = {
	showSecret: SecretsType | null
	secrets: SecretsType[]
}

export type StateType = {
	state: SecretsStateType
}

export type ActionsType = {
	addSecrets: (pins: SecretsType[]) => void
	addSecret: (pin: Omit<SecretsType, 'id' | 'createdAt'>) => void
	setShowSecret: (showSecret: SecretsType | null) => void
	deleteSecrets: (secretID: string[]) => void
}
