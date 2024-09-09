import { Feather, FontAwesome, Octicons } from '@expo/vector-icons'
import { FC } from 'react'

type PropsType = {
	color: string
	size?: number
}

type FontAwesomeNames = {
	name: React.ComponentProps<typeof FontAwesome>['name']
}

export const FontAwesomeIcon: FC<PropsType & FontAwesomeNames> = ({
	size = 28,
	...rest
}) => {
	return <FontAwesome size={size} {...rest} />
}

type FeatherNames = {
	name: React.ComponentProps<typeof Feather>['name']
}

export const FeatherIcon: FC<PropsType & FeatherNames> = ({
	size = 28,
	...rest
}) => {
	return <Feather size={size} {...rest} />
}

type OctNames = {
	name: React.ComponentProps<typeof Octicons>['name']
}

export const OctIcon: FC<PropsType & OctNames> = ({ size = 28, ...rest }) => {
	return <Octicons size={size} {...rest} />
}
