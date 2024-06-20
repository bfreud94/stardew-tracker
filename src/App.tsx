import { useEffect, useState } from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import { getComponent, getCookieData, setCookieData } from './util'

const App = () => {
	const [activeComponent, setActiveComponent] = useState('Calendar')
	const Component = getComponent(activeComponent)
	useEffect(() => {
		const cookieData = getCookieData()
		if (Object.keys(cookieData).length === 0) {
			setCookieData()
		}
	}, [])
	return (
		<>
			<AppHeader setActiveComponent={setActiveComponent} />
			<Component />
		</>
	)
}

export default App
