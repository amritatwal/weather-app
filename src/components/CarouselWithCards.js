import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, Grid, Row, Text } from "@nextui-org/react";

import DailyCard from "./Card";

const apiResponse = {
  lat: 52.53,
  lon: -1.81,
  timezone: "Europe/London",
  timezone_offset: 3600,
  current: {
    dt: 1651743154,
    sunrise: 1651724903,
    sunset: 1651779566,
    temp: 14.45,
    feels_like: 13.67,
    pressure: 1024,
    humidity: 66,
    dew_point: 8.18,
    uvi: 3.9,
    clouds: 75,
    visibility: 10000,
    wind_speed: 2.57,
    wind_deg: 320,
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
  },
  daily: [
    {
      dt: 1651752000,
      sunrise: 1651724903,
      sunset: 1651779566,
      moonrise: 1651733220,
      moonset: 1651708800,
      moon_phase: 0.14,
      temp: {
        day: 15.44,
        min: 7.34,
        max: 17.76,
        night: 11.6,
        eve: 15.69,
        morn: 9.87,
      },
      feels_like: {
        day: 14.66,
        night: 11.22,
        eve: 15.46,
        morn: 8.41,
      },
      pressure: 1024,
      humidity: 62,
      dew_point: 8.2,
      wind_speed: 3.56,
      wind_deg: 304,
      wind_gust: 8.77,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 80,
      pop: 0.45,
      rain: 0.77,
      uvi: 5.19,
    },
    {
      dt: 1651838400,
      sunrise: 1651811193,
      sunset: 1651866068,
      moonrise: 1651822740,
      moonset: 1651798380,
      moon_phase: 0.17,
      temp: {
        day: 15.76,
        min: 8.6,
        max: 16.23,
        night: 11.59,
        eve: 12.2,
        morn: 10.06,
      },
      feels_like: {
        day: 15.3,
        night: 11.36,
        eve: 11.98,
        morn: 9.37,
      },
      pressure: 1024,
      humidity: 73,
      dew_point: 10.73,
      wind_speed: 5.21,
      wind_deg: 252,
      wind_gust: 8.85,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 99,
      pop: 1,
      rain: 3.81,
      uvi: 3.51,
    },
    {
      dt: 1651924800,
      sunrise: 1651897484,
      sunset: 1651952570,
      moonrise: 1651912980,
      moonset: 1651887180,
      moon_phase: 0.2,
      temp: {
        day: 17.7,
        min: 8.51,
        max: 18.51,
        night: 11.21,
        eve: 14.99,
        morn: 9.66,
      },
      feels_like: {
        day: 16.81,
        night: 10.48,
        eve: 14.37,
        morn: 8.91,
      },
      pressure: 1027,
      humidity: 49,
      dew_point: 6.75,
      wind_speed: 4.22,
      wind_deg: 64,
      wind_gust: 7.01,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 6,
      pop: 0.99,
      rain: 1.12,
      uvi: 4.47,
    },
    {
      dt: 1652011200,
      sunrise: 1651983778,
      sunset: 1652039071,
      moonrise: 1652003580,
      moonset: 1651975440,
      moon_phase: 0.23,
      temp: {
        day: 17.54,
        min: 8.87,
        max: 17.59,
        night: 12.23,
        eve: 16.62,
        morn: 9.84,
      },
      feels_like: {
        day: 16.81,
        night: 11.65,
        eve: 16.01,
        morn: 9.08,
      },
      pressure: 1029,
      humidity: 56,
      dew_point: 8.66,
      wind_speed: 2.89,
      wind_deg: 98,
      wind_gust: 6.2,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 90,
      pop: 0.27,
      rain: 0.29,
      uvi: 5.04,
    },
    {
      dt: 1652097600,
      sunrise: 1652070073,
      sunset: 1652125572,
      moonrise: 1652094480,
      moonset: 1652063220,
      moon_phase: 0.25,
      temp: {
        day: 16.51,
        min: 9.19,
        max: 18.52,
        night: 13.96,
        eve: 16.7,
        morn: 9.96,
      },
      feels_like: {
        day: 15.52,
        night: 13.66,
        eve: 16.36,
        morn: 8.75,
      },
      pressure: 1025,
      humidity: 50,
      dew_point: 5.85,
      wind_speed: 5.88,
      wind_deg: 203,
      wind_gust: 12.68,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: 100,
      pop: 0,
      uvi: 5.58,
    },
    {
      dt: 1652184000,
      sunrise: 1652156369,
      sunset: 1652212072,
      moonrise: 1652185440,
      moonset: 1652150640,
      moon_phase: 0.3,
      temp: {
        day: 18.45,
        min: 11.7,
        max: 18.52,
        night: 11.74,
        eve: 16.5,
        morn: 12.23,
      },
      feels_like: {
        day: 17.63,
        night: 10.98,
        eve: 15.72,
        morn: 11.68,
      },
      pressure: 1018,
      humidity: 49,
      dew_point: 7.37,
      wind_speed: 5.87,
      wind_deg: 251,
      wind_gust: 13.01,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: 86,
      pop: 0,
      uvi: 6,
    },
    {
      dt: 1652270400,
      sunrise: 1652242668,
      sunset: 1652298571,
      moonrise: 1652276520,
      moonset: 1652237940,
      moon_phase: 0.33,
      temp: {
        day: 14.79,
        min: 8.71,
        max: 14.79,
        night: 9.89,
        eve: 12.94,
        morn: 10.32,
      },
      feels_like: {
        day: 14.07,
        night: 7.89,
        eve: 12.27,
        morn: 9.47,
      },
      pressure: 1013,
      humidity: 67,
      dew_point: 8.7,
      wind_speed: 5.4,
      wind_deg: 248,
      wind_gust: 10.16,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 99,
      pop: 0.9,
      rain: 3.01,
      uvi: 6,
    },
    {
      dt: 1652356800,
      sunrise: 1652328968,
      sunset: 1652385069,
      moonrise: 1652367660,
      moonset: 1652325060,
      moon_phase: 0.36,
      temp: {
        day: 16.23,
        min: 7.6,
        max: 16.74,
        night: 10.86,
        eve: 14.5,
        morn: 8.82,
      },
      feels_like: {
        day: 15.14,
        night: 10.01,
        eve: 13.65,
        morn: 7.64,
      },
      pressure: 1015,
      humidity: 47,
      dew_point: 4.74,
      wind_speed: 5.81,
      wind_deg: 249,
      wind_gust: 11.16,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: 30,
      pop: 0,
      uvi: 6,
    },
  ],
};

//npm i react-responsive-carousel
//

function CarouselWithCards() {
    
  const location = "Birmingham";

  return (
    <div className="App">
      <Carousel showThumbs={false}>
        <Row>
          <DailyCard
            location={location}
            apiResponse={apiResponse.daily[0]}
            date={`${location} - Today`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse.daily[1]}
            date={`${location} - Tomorrow`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse.daily[2]}
            date={`${location} - Sat 7th May`}
          />
        </Row>
        <Row>
          <DailyCard
            location={location}
            apiResponse={apiResponse.daily[3]}
            date={`${location} - Sun 8th May`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse.daily[4]}
            date={`${location} - Mon 9th May`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse.daily[5]}
            date={`${location} - Tue 10th May`}
          />
        </Row>
        <Row>
          <DailyCard
            location={location}
            apiResponse={apiResponse.daily[6]}
            date={`${location} - Wed 11th May`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse.daily[7]}
            date={`${location} - Thur 12th May`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse.daily[0]}
            date={`${location} - Today`}
          />
        </Row>
      </Carousel>
    </div>
  );
}

export default CarouselWithCards;
