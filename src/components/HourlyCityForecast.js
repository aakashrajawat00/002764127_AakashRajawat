import React from "react";

var moment = require("moment");

function HourlyForecast(props) {
  let _date = new Date();
  const weekday = props.data.dt * 1000;
  _date.setTime(weekday);
  const _img = `owf owf-${props.data.weather[0].id} owf-3x`;
  const fahrenheitMax = Math.round(props.data.main.temp_max);

  const fahrenheitMin = Math.round(props.data.main.temp_min);

  const farenheitTemp = Math.round(props.data.main.temp);
  const CelciusTemp = Math.round(((farenheitTemp-32)*5/9)*10)/10;

  return (
    <div className="row">
      <div className="col-12">
        <div className="card py-2 my-3">
          <div className="row">
            <div className="col">
              <h4 className="text-danger">
                {moment(_date).format("MM/D/YY")}
              </h4>
              <h5>
                {props.data.day} at {moment(_date).format("HH:mm")}
              </h5>
              <h5>Temperature: {farenheitTemp}°F / {CelciusTemp} °C</h5>
              <i className={_img}></i>
              <p>{props.data.weather[0].description}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;
