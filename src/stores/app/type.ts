export type AppStateType = {
	isOpenModal: boolean
	isMasterKey: boolean
	masterKeyModal: boolean
}

export type StateType = {
	state: AppStateType
}

export type ActionsType = {
	setIsOpenModal: (isOpenModal: boolean) => void
	setIsMasterKey: (isMasterKey: boolean) => void
	setMasterKeyModal: (masterKeyModal: boolean) => void
}
