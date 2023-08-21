import React from 'react'
import "./Input.css"
const Input = ({placeholder,type,value,onChange,onKeyDown}) => {
  return (
    <>
        <input onChange={onChange} onKeyDown={onKeyDown} type={type} value={value} placeholder={placeholder} className='search-input'/>
    </>
  )
}

export default Input