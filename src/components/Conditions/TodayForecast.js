import React, { PropTypes } from 'react';

// import '../../CSS/components/TodayForecast.scss';


const TodayForecast = (props) => {
  const { todayData } = props;
  const { units } = 'Kelvin';
  const { unitsspeed } = 'meter/sec';
  function getUnit() {
    if (props.unit === 'metric') {
      return <span>&#8451;</span>;
    }
    else {
      return <span>&#8457;</span>;
    }

  }
  return (
    <div className="rw-today">
      <div className="date"> {todayData.name} {" "} {todayData.sys.country} </div>
      <div className="hr"></div>
      <div className="current">Temperature : {todayData.main.temp} {getUnit()}</div>
      <div className="range">Minimum/Maximum Temperature: {todayData.main.temp_max} {getUnit()} / {todayData.main.temp_min} {getUnit()}
      </div>
      <div className="desc">
        {todayData.weather[0].description}
      </div>
      <div className="hr"></div>
      <div className="info">
        <div> Wind : <b>{todayData.wind.speed}</b> meter/sec</div>
        <div>Humidity: <b>{todayData.main.humidity}</b> %</div>
      </div>
    </div>
  );
};
export default TodayForecast;