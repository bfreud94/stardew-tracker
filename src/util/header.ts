import { FC } from 'react'
import CalendarContainer from '../components/CalendarContainer/CalendarContainer'
import Calculator from '../components/Calculator/Calculator'

export const APP_HEADER_ELEMENTS = ['Calendar', 'Calculator']

export const getComponent = (activeComponent: string):
	FC => activeComponent === 'Calendar' ? CalendarContainer : Calculator