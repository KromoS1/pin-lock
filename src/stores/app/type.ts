export type AppStateType = {
	isOpenModal: boolean
	isMasterKey: boolean
}

export type StateType = {
	state: AppStateType
}

export type ActionsType = {
	setIsOpenModal: (isOpenModal: boolean) => void
	setIsMasterKey: (isMasterKey: boolean) => void
}
