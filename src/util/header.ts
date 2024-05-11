import { FC } from 'react'
import Calculator from '../components/Calculator/Calculator'
import CalendarContainer from '../components/Calendar/CalendarContainer/CalendarContainer'

export const APP_HEADER_ELEMENTS = ['Calendar', 'Calculator']

export const getComponent = (activeComponent: string):
	FC => activeComponent === 'Calendar' ? CalendarContainer : Calculator