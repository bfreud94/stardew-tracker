import { FC, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader/AppHeader'
import { Route as SVRoute, Season } from './types'
import { getCookieData, getRoutes, setCookieData } from './util'

const App: FC = () => {
	const [season, setSeason] = useState<Season>('Spring')

	useEffect(() => {
		const cookieData = getCookieData()
		if (Object.keys(cookieData).length === 0) {
			setCookieData()
		}
	}, [])

	const routes = getRoutes(season, setSeason)

	return (
		<BrowserRouter>
			<AppHeader />
			<Routes>
				{routes.map(({ route, component }: SVRoute) => (
					<Route key={route} path={route} element={component} />
				))}
			</Routes>
		</BrowserRouter>
	)
}

export default App
