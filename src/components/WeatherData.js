import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

var moment = require("moment");

function WeatherData(props) {
  let _date = new Date();
  const weekday = props.reading.dt * 1000;
  _date.setTime(weekday);
  const _img = `owf owf-${props.reading.weather[0].id } owf-2x`;
  const fahrenheitMax = props.reading.main.temp_max;
  const CelciusMax =  Math.round(((fahrenheitMax-32)*5/9)*10)/10;
  const fahrenheitMin = props.reading.main.temp_min;
  const CelciusMin = Math.round(((fahrenheitMin-32)*5/9)*10)/10;
  const farenheitTemp = props.reading.main.temp;
  const CelciusTemp = Math.round(((farenheitTemp-32)*5/9)*10)/10;

  return (
    
      <div className="row-5">
        <div className="col-12">
          <Link
            to={{
              pathname: `/${props.reading.day}`,
              state: {
                completeData: props.completeData,
                cityName: props.cityName,
              },
            }}
          >
            <div className="card ">
              <div className="row">
                <div className="col">
                  <h4 className="text-danger">
                    {moment(_date).format("MM/D/YY")}
                    
                  </h4>
                  <i className={_img}></i>
                  <p>{props.reading.weather[0].description}</p>
                  <h5>{props.reading.day}</h5>
                  <h6>Temperature: {farenheitTemp}°F / {CelciusTemp} °C</h6>
                  
                  
                  <p>
                    
                    Minimum: {fahrenheitMin}°F / {CelciusMin} °C
                    <br></br>
                    Maximum: {fahrenheitMax}°F / {CelciusMax} °C
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
  );
}

export default withRouter(WeatherData);
