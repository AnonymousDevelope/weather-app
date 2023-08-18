import React from 'react'
import './main.css'
function Main() {
  return (
    <>
      <div className="weather-card shadow w-50 border mt-5 mx-auto ">
        <div className="row w-100">
          <div className="title text-center">
            <h1>{/*Title*/}Weather of London</h1>
          </div>
        </div>
        <div className="row">
          <div className="data">
            <div className="row cn_temp flex-row">
              <div className="col-md-9">
                <div className="city_name">
                  <h1 className='text-ligt'>CITY NAME</h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="temp">
                  <div className="row">
                    <div className="col">
                      gradus
                    </div>
                    <div className="col">
                      gradus
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main