export type AppStateType = {
	isOpenModal: boolean
}

export type StateType = {
	state: AppStateType
}

export type ActionsType = {
	setIsOpenModal: (isOpenModal: boolean) => void
}
