import React from 'react'
import Apps from './components/ConditionalRendering/App'
import WindowLayoutComponent from './components/CustomHokks/WindowLayoutComponent'
import WindowLayoutComponentTwo from './components/CustomHokks/WindowLayoutComponentTwo'

export default function App() {
  return (
    <>
    <Apps />
    <WindowLayoutComponent />
    <WindowLayoutComponentTwo/>
    </>
  )
}
