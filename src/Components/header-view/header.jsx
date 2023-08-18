import React from 'react'
import "./header.css"
import {Input} from '../../ui-components'
import axios from 'axios'
function Header({className,logoImage}) {
  const apiConfig = {
    key:"2ef5604e021461841a166df819d53a62",
    //url: from openweathermap 
    url: "https://api.openweathermap.org/data/2.5"
  }
  const getWetaher=async()=>{

    await axios.get(`${apiConfig.url}/weather?q=London,uk&appid=${apiConfig.key}`).then(res=>{
      console.log(res.data)
    })
  }
  return (
    //create nav-collapse
    <>
      <div className={"container-fluid container-weather"+" "+className}>
          <div className="navbar-weather">
            <div className="navbar-logo">
              <div className="title">
                Weather APP
                <img src={logoImage} width={50}  alt="" />
              </div>
            </div>
            <div className="navbar-menu">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-search">
              <form >
                <div className="form-weather form-group">
                  <Input type='text' placeholder={"Search . . ."}/>
                  <button onClick={getWetaher} type='button' className="btn btn-outline-secondary border-0">
                    <i className='fa fa-search'></i>
                    </button>
                </div>
              </form>
            </div>
            <div className="lang-weather">
              <ul className="nav navbar-nav">
                <li className='navbat-item'><a className="nav-link" href="#">ENG</a></li>
                <li className='navbat-item'><a className="nav-link" href="#">UZB</a></li>
                <li className='navbat-item'><a className="nav-link" href="#">RUS</a></li>
              </ul>
            </div>
          </div>
      </div>
    </>
  )
}

export default Header