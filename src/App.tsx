import { useState } from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import { getComponent } from './util'

const App = () => {
	const [activeComponent, setActiveComponent] = useState('Calendar')
	const Component = getComponent(activeComponent)
	return (
		<>
			<AppHeader setActiveComponent={setActiveComponent} />
			<Component />
		</>
	)
}

export default App
