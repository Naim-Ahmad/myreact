import React from 'react';
import useWindowLayout from '../../Hooks/useWindowLayout';

export default function WindowLayoutComponent() {
    const isSmallWindow = useWindowLayout() 
  return (
    <h1>You are on {isSmallWindow ? 'small': 'large'} device</h1>
  )
}
