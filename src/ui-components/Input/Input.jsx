import React from 'react'
import "./Input.css"
const Input = ({placeholder,type,value}) => {
  return (
    <>
        <input type={type} value={value} placeholder={placeholder} className='search-input'/>
    </>
  )
}

export default Input