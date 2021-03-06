import React from 'react';
import './index.css';

class Weather extends React {
    render() {
        const array = this.props.data.sol_keys
        const lastValue = array[array.length -1]
        return(
            <div className="weatherWrapper">
                <h1 className="title"> Visiting Elysium Planitia?</h1>
                <p className="subtitle"Elysium Planitia is a scenic flat plain just north of Club Med Mars></p>
                <div className = "weather">
                    <p className = "sol">Sol: </p>

                   <p className="sol">Sol: {lastValue}</p>
               <p className="subSol">Sol is day on Mars</p>
               {/* <p><span>Temperature:</span> {this.props.data[lastValue].AT.av} °C</p> */}
               <p><span>Wind Speed:</span> {this.props.data[lastValue].HWS.av} mph</p>
               <p><span>Pressure:</span> {this.props.data[lastValue].PRE.av} Pa</p>
               <p className="update">Updated on: {this.props.data[lastValue].First_UTC}</p>
            </div>
                         
        </div>

        )
    }
}

export default Weather;