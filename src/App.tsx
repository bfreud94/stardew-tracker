import { FC, useEffect, useState } from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import Calculator from './components/Calculator/Calculator'
import CalendarContainer from './components/Calendar/CalendarContainer/CalendarContainer'
import { Season } from './types'
import { getCookieData, setCookieData } from './util'

const App: FC = () => {
	const [activeComponent, setActiveComponent] = useState<string>('Calendar')
	const [season, setSeason] = useState<Season>('Spring')

	const isCalendarContainer = activeComponent === 'Calendar'

	useEffect(() => {
		const cookieData = getCookieData()
		if (Object.keys(cookieData).length === 0) {
			setCookieData()
		}
	}, [])

	return (
		<>
			<AppHeader setActiveComponent={setActiveComponent} />
			{isCalendarContainer ? (
				<CalendarContainer season={season} setSeason={setSeason} />
			) : (
				<Calculator />
			)}
		</>
	)
}

export default App
