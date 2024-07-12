import { NavigateFunction } from 'react-router-dom'

export const setActiveComponent = (componentName: string, navigate: NavigateFunction) => {
	switch (componentName) {
		case 'Calendar':
			navigate('/calendar')
			break
		case 'Calculator':
			navigate('/calculator')
			break
		case 'Universal Affinities':
			navigate('/universal-affinities')
			break
		case 'Villager Directory':
			navigate('/villager-directory')
			break
		default:
			navigate('/')
	}
}
