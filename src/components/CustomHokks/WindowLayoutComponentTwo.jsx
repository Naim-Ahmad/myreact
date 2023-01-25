import React from 'react'
import useWindowLayout from '../../Hooks/useWindowLayout'

export default function WindowLayoutComponentTwo() {
    const isSmallWindow = useWindowLayout(800)
  return (
    <h1 className={isSmallWindow ? 'small': 'large'}>WindowLayoutComponentTwo</h1>
  )
}
