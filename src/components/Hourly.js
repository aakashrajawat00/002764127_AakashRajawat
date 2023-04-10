import React, { useState, useEffect } from "react";
import HourlyCityForecast from "./HourlyCityForecast";

function Hourly(props) {
  let completeData = props.location.state.completeData;
  let _selectedParam = props.match.params;

  const [_data, _setData] = useState([]);

  useEffect(() => {
    const tempData = completeData.filter((cd) => cd.day == _selectedParam.day);
    _setData(tempData);
  }, []);

  return (
    <div className="container-fluid">
      <h4 className="py-3">
        {" "}
       {_selectedParam.day} weather in  {props.location.state.cityName.toUpperCase()} 
      </h4>
      <div className="justify-content-center m-2">{displayHourlyData()}</div>
    </div>
  );

  function displayHourlyData() {
    return _data.map((value, index) => (
      <HourlyCityForecast data={value} key={index} />
    ));
  }
}

export default Hourly;
