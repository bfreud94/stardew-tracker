import { FC, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader/AppHeader'
import Calculator from './components/Calculator/Calculator'
import CalendarContainer from './components/Calendar/CalendarContainer/CalendarContainer'
import RandomEvents from './components/RandomEvents/RandomEvents'
import UniversalAffinities from './components/UniversalAffinities/UniversalAffinities'
import VillagerDirectory from './components/VillagerDirectory/VillagerDirectory'
import { Season } from './types'
import { getCookieData, setCookieData } from './util'

const App: FC = () => {
	const [season, setSeason] = useState<Season>('Spring')

	useEffect(() => {
		const cookieData = getCookieData()
		if (Object.keys(cookieData).length === 0) {
			setCookieData()
		}
	}, [])

	return (
		<BrowserRouter>
			<AppHeader />
			<Routes>
				<Route path='/calendar' element={<CalendarContainer season={season} setSeason={setSeason} />} />
				<Route path='/calculator' element={<Calculator />} />
				<Route path='/universal-affinities' element={<UniversalAffinities />} />
				<Route path='/villager-directory' element={<VillagerDirectory />} />
				<Route path='/random-events' element={<RandomEvents />} />
				<Route path='/' element={<Navigate to='/calendar' replace />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
