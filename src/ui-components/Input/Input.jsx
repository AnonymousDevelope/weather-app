import React from 'react'
import "./Input.css"
const Input = ({placeholder,type,value,onChange}) => {
  return (
    <>
        <input onChange={onChange} type={type} value={value} placeholder={placeholder} className='search-input'/>
    </>
  )
}

export default Input