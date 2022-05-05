import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { BiSearchAlt2 } from "react-icons/bi";
import {message} from "antd"

export default function Searchbar({ setCurrentData }) {
  const [input, setInput] = useState("");

  async function getDataFromAPI() {
    console.log("clicked")
    const apiBase = process.env.NEXT_PUBLIC_GEOLOCATION_API_BASE;
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const fetchString = `${apiBase}?appid=${apiKey}&q=${input},GB&limit=1`;

    let databack = "";

    try {
      console.log("THIS IS THE API KEY", apiKey)
      const res = await fetch(fetchString);
      const data = await res.json();

      console.log("Fetch to", fetchString)
      if (data.length === 0) {
        console.log("Town not found")
        throw "Town or City not found";
      }else{
        databack = data
      }
    } catch (error) {
      console.log(error)
      try {
        const postcodeApiBase = process.env.NEXT_PUBLIC_GEOLOCATION_POSTCODE_BASE;
        const newfetchString = `${postcodeApiBase}?zip=${input},GB&appid=${apiKey}`;

        const postCodeRes = await fetch(newfetchString)
        const postCodeData = await postCodeRes.json()


        if (postCodeData.length === 0) {
          throw "Town or City not found";
        }
      } catch (error) {
        console.log("THE ERROR IS", error)
        databack = error;
      }
    }

    if (databack === "Town or City not found") {
        message.error("Town or City not found, please try again");
      return;
    }


    //if Succesful Send below

    const mainApiBase = process.env.NEXT_PUBLIC_WEATHER_API_BASE;

    const mainFetchString = `${mainApiBase}?lat=${databack[0].lat}&lon=${databack[0].lon}&appid=${apiKey}&units=metric`;
    const mainRes = await fetch(mainFetchString);
    const rawData = await mainRes.json();
    const { daily: newData } = rawData;

    newData[0].currentTemp = rawData.current.temp;

    newData.map((v, i) => {
      const { day, night, eve, morn } = v.temp;
      if (i === 0) {
        return v;
      }
      v.averageTemp = day + night + eve + morn / 4;
    });

    setCurrentData(() => newData);
    console.log("This is the new data",newData)
  }

  //Try getting town first
  //Throw error if array is empty
  //Try postcode next
  //if still empty error

  ///Get lat and long
  //Fetch to API
  //
  //

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <>
      <Input
      aria-label="Search"
        clearable
        placeholder="Search by Town or City"
        contentRight={
          <div
          aria-label="Submit"
          
          >
            <BiSearchAlt2 
            onClick={getDataFromAPI}
            />
          </div>
        }
        onChange={e => {
          setInput(e.target.value);
        }}
        />

        <button
        onClick={getDataFromAPI}
        >Click to send</button>
    </>
  );
}
