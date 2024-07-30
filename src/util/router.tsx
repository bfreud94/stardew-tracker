import { Navigate, NavigateFunction } from 'react-router-dom'
import Calculator from '../components/Calculator/Calculator'
import CalendarContainer from '../components/Calendar/CalendarContainer/CalendarContainer'
import RandomEvents from '../components/RandomEvents/RandomEvents'
import UniversalAffinities from '../components/UniversalAffinities/UniversalAffinities'
import VillagerDirectory from '../components/VillagerDirectory/VillagerDirectory'
import { Season, SetSeasonStateAction, Route } from '../types'

export const getRoutes = (season: Season, setSeason: SetSeasonStateAction): Array<Route> => (
	[
		{
			route: '/calendar',
			component: <CalendarContainer season={season} setSeason={setSeason} />
		},
		{
			route: '/calculator',
			component: <Calculator />
		},
		{
			route: '/universal-affinities',
			component: <UniversalAffinities />
		},
		{
			route: '/villager-directory',
			component: <VillagerDirectory />
		},
		{
			route: '/random-events',
			component: <RandomEvents />
		},
		{
			route: '/',
			component: <Navigate to='/calendar' replace />
		}
	]
)

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
		case 'Random Events':
			navigate('/random-events')
			break
		default:
			navigate('/')
	}
}