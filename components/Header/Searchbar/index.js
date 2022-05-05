import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { BiSearchAlt2 } from "react-icons/bi";
import {message} from "antd"

export default function Searchbar({ setCurrentData }) {
  const [input, setInput] = useState("");

  async function getDataFromAPI() {
    const apiBase = process.env.GEOLOCATION_API_BASE;
    const apiKey = process.env.WEATHER_API_KEY;
    const fetchString = `${apiBase}?appid=${apiKey}q=${input},GB&limit=1`;

    let databack = "";

    try {
      const res = await fetch(fetchString);
      const data = await res.json();
      if (data.length === 0) {
        throw new Error("Town or City not found");
      }
    } catch (error) {
      try {
        const postcodeApiBase = process.env.GEOLOCATION_API_BASE;
        const fetchString = `${postcodeApiBase}?zip=${input},GB&appid=${apiKey}`;
        if (data.length === 0) {
          throw new Error("Town or City not found");
        }
      } catch (error) {
        databack = error;
      }
    }

    if (databack === "Town or City not found") {
        message.error("Town or City not found, please try again");
      return;
    }


    //if Succesful Send below

    const mainApiBase = process.env.WEATHER_API_BASE;

    const newfetchString = `${mainApiBase}?lat=52.4862&lon=1.8904&appid=${apiKey}&units=metric`;
    const res = await fetch(newfetchString);
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

    setCurrentData(() => data);
    console.log("This is the data",data)
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
            onClick={() => {
              getDataFromAPI();
            }}
          >
            <BiSearchAlt2 />
          </div>
        }
        onChange={e => {
          setInput(e.target.value);
        }}
      />
    </>
  );
}
