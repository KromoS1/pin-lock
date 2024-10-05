export type BiometricsStateType = {
	isBiometricSupported: boolean
	fingerprint: boolean
	isAccess: boolean
	isError: boolean
}

export type StateType = {
	state: BiometricsStateType
}

export type ActionsType = {
	setBiometricSupported: (isBiometricSupported: boolean) => void
	setFingerprint: (fingerprint: boolean) => void
	setAccess: (isAccess: boolean) => void
	setError: (isError: boolean) => void
}
