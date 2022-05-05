import { Carousel } from "antd"
import { Container } from "@nextui-org/react";
import React, { useState } from "react"
import { useEffect } from "react"
import Header from "../src/components/Header"

import TempCard from "../src/components/TempCard"
import CarouselWithCards from "../src/components/CarouselWithCards.js"

export default function Home({ data }) {

  const [currentData, setCurrentData] = useState(data)

  //Have a state that's a number to index the data array:: selectedDay
  //Have a state that stores that selected data with data[selectedDay]
  //Have a useEffect that detetcs when selectedDay changes and sets selected data to the selected data 

  const [selectedDay, setSelectedDay] = useState(0)
  const [selectedData, setSelectedData] = useState(currentData[selectedDay])


  

  const [currentData, setCurrentData] = useState(data)

  // Gradients for backgrounds 
  const sunny = "linear-gradient(180deg, #2BAFD0 0%, rgba(109, 213, 237, 0.33) 100%)";


  const [location, setLocation] = useState("Birmingham")

  const [currentData, setCurrentData] = useState(data)

  useEffect(() => {
    setSelectedData(() => data[selectedDay])
  }, [selectedDay])

  useEffect(() => { //When currentData is updated with an api call, reset selected day to 0, selected data to first in the array
    setSelectedDay(() => 0)
    setSelectedData(() => currentData[selectedDay])
  }, [currentData])



  console.log(data)
  
  return (
    <Container
      <Header setLocation={setLocation} setCurrentData={setCurrentData} />
      <TempCard
        selectedData={selectedData}
        location={location}
        selectedDay={selectedDay}
      />
      <CarouselWithCards
        apiResponse={currentData}
        setSelectedDay={setSelectedDay}
        location={location}
      />
    </>
    </Container >
  )

}

export async function getServerSideProps() {
  const apiBase = process.env.WEATHER_API_BASE;
  const apiKey = process.env.WEATHER_API_KEY;

  const fetchString = `${apiBase}?lat=52.4862&lon=1.8904&appid=${apiKey}&units=metric`;
  const res = await fetch(fetchString);
  const rawData = await res.json();
  const { daily: data } = rawData;

  data[0].currentTemp = rawData.current.temp;

  data.map((v, i) => {
    const { day, night, eve, morn } = v.temp;
    if (i === 0) {
      return v;
    }
    v.averageTemp = day + night + eve + morn / 4;
  });

  return { props: { data } };
}
