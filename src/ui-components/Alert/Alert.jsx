import React from 'react'
import './Alert.css'
const Alert = ({children}) => {
  return (
    <div className="weather-alert">
        {children}
    </div>
  )
}

export default Alert