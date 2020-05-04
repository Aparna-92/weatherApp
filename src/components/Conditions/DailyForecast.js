import React, { PropTypes } from 'react';
import dayjs from "dayjs";

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";

export default function DailyForecast(props) {
  
  function getUnit() {
    if (props.unit === 'metric') {
      return <span>&#8451;</span>;
    }
    else {
      return <span>&#8457;</span>;
    }

  }

  const result = props.forecastData.map((item, index) => {
    return (
      <div>
        <ListItem key={index} className="forecastItem">
          <ListItemText
            className="week-day"
            primary={dayjs(item.dt_txt).format("dddd")}
            style={{ flex: "1 1 0%", textAlign: "left" }}
          ></ListItemText>
          
            
         <ListItemText
            className="week-day"
            primary={item.weather[0].description}
            style={{ flex: "1 1 0%", textAlign: "center",  }}
          ></ListItemText>
            
          
          <span className="temp" style={{ flex: "1 1 0%", textAlign: "center" }}>
            <Typography variant="body2" component="span" >
            Temp :{Math.round(item.main.temp)}{" "}{getUnit()}
            </Typography>
           
          </span>
        </ListItem>
      </div>
    );
  }
  );

  return <List aria-label="DailyForecast data">{result}</List>;
}