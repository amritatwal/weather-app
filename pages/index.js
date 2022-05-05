//import React, { useState } from "react";
//import { useEffect } from "react";
//import Header from "../src/components/Header";

export default function Home({ data }) {
  //Have a state that's a number to index the data array:: selectedDay
  //Have a state that stores that selected data with data[selectedDay]
  //Have a useEffect that detetcs when selectedDay changes and sets selected data to the selected data

  // const [selectedDay, setSelectedDay] = useState(0);
  // const [selectedData, setSelectedData] = useState(data[selectedDay]);

  // useEffect(() => {
  //   setSelectedData(() => data[selectedDay]);
  // }, [selectedDay]);

  // console.log(data);
  return (
    <>
      {/* <Header /> */}
      {/* <Dashboard selectedData={selectedData}/>
  <Carousel setSelectedDay={setSelectedDay}/> */}
    </>
  );
}

// export async function getServerSideProps() {
//   const apiBase = process.env.WEATHER_API_BASE;
//   const apiKey = process.env.WEATHER_API_KEY;

//   const fetchString = `${apiBase}?lat=52.4862&lon=1.8904&appid=${apiKey}&units=metric`;
//   const res = await fetch(fetchString);
//   const rawData = await res.json();
//   const { daily: data } = rawData;

//   data[0].currentTemp = rawData.current.temp;

//   data.map((v, i) => {
//     const { day, night, eve, morn } = v.temp;
//     if (i === 0) {
//       return v;
//     }
//     v.averageTemp = day + night + eve + morn / 4;
//   });

//   return { props: { data } };
// }
