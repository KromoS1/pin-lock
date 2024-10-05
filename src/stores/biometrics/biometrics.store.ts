import { create } from 'zustand'
import { createSelectors } from '../createSelectors'
import { ActionsType, BiometricsStateType, StateType } from './type'

export const init: BiometricsStateType = {
	isBiometricSupported: false,
	fingerprint: false,
	isAccess: false,
	isError: false,
}

const useBiometricsBase = create<StateType & ActionsType>(set => ({
	state: init,
	setBiometricSupported: (isBiometricSupported: boolean) =>
		set(store => {
			return { state: { ...store.state, isBiometricSupported } }
		}),
	setFingerprint: (fingerprint: boolean) =>
		set(store => {
			return { state: { ...store.state, fingerprint } }
		}),
	setAccess: (isAccess: boolean) =>
		set(store => {
			return { state: { ...store.state, isAccess } }
		}),
	setError: (isError: boolean) =>
		set(store => {
			return { state: { ...store.state, isError } }
		}),
}))

export const useBiometrics = createSelectors(useBiometricsBase)
