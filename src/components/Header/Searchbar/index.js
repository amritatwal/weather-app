import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { message } from "antd";

export default function Searchbar({ setCurrentData, setLocation }) {
  const [input, setInput] = useState("");

  async function getDataFromAPI() {
    console.log("clicked");
    const apiBase = process.env.NEXT_PUBLIC_GEOLOCATION_API_BASE;
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const fetchString = `${apiBase}?appid=${apiKey}&q=${input},GB&limit=1`;

    const res = await fetch(fetchString);
    const data = await res.json();

    let databack = "";


    if (data.length > 0) {
      databack = data;
      console.log("LOCATION DATA", data)
    }

    if (data.length === 0) {
      console.log("town failed");
      // const postcodeApiBase = process.env.NEXT_PUBLIC_GEOLOCATION_POSTCODE_BASE;
      // const newfetchString = `${postcodeApiBase}?zip=${input},GB&appid=${apiKey}`;
      // const postCodeRes = await fetch(newfetchString);
      // const postCodeData = await postCodeRes.json();
      // console.log("THIS IS THE DATABACK FRO  GEO",postCodeData)

      // console.log("THIS IS PSOTCOIDE DATA",postCodeData);
      message.error("Town or city not found please try again");
      return
      // if (postCodeData.length === 0) {
      //   message.error("Town or city not found, please try again");
      //   return;
      // } else {
      //   databack = postCodeData;
      // }
      
    }

    //if Succesful Send below

    // if (!databack.lon) {
    //   message.error("Town or city not found please try again");
    //   return;
    // }

    const mainApiBase = process.env.NEXT_PUBLIC_WEATHER_API_BASE;

    const mainFetchString = `${mainApiBase}?lat=${databack[0].lat}&lon=${databack[0].lon}&appid=${apiKey}&units=metric`;
    console.log(mainFetchString);
    const mainRes = await fetch(mainFetchString);
    const rawData = await mainRes.json();
    const { daily: newData } = rawData;

    console.log(newData);

    newData[0].currentTemp = rawData.current.temp;

    newData.map((v, i) => {
      const { day, night, eve, morn } = v.temp;
      if (i === 0) {
        return v;
      }
      v.averageTemp = day + night + eve + morn / 4;
    });

    setCurrentData(() => newData);
    setLocation(() => databack[0].name);
    console.log("This is the new data", newData);
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
          <div aria-label="Submit">
            <BiSearchAlt2 onClick={getDataFromAPI} />
          </div>
        }
        onChange={e => {
          setInput(e.target.value);
        }}
      />

      <button onClick={getDataFromAPI}>Click to send</button>
    </>
  );
}
