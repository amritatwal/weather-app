import { Card, Grid, Row, Text } from "@nextui-org/react";
import RealFeel from '../components/Dashboard/RealFeel'
import LargeTemperature from '../components/Dashboard/LargeTemperature'
import Location from '../components/Dashboard/Location'
export default function TempCard({selectedData, location, selectedDay}){


  let firstDay = false
  if (selectedDay===0){ firstDay = true}else{firstDay = false}
  const weather = selectedData.weather
  const realFeel = selectedData.feels_like.day
  const temperature = selectedData.currentTemp
  const averageTemperature = Math.round(selectedData.averageTemp)
  
    console.log(selectedData)
  const desc = weather[0].description
  
  return (
    <>
      <Location location={location}/> 
           <Card hoverable>
            <Card.Body css={{ p: 0 }}>
            {firstDay && <LargeTemperature temperature={temperature}/>}
            {!firstDay && <LargeTemperature temperature={averageTemperature}/>}
            </Card.Body>
            <Card.Footer justify="flex-start">
              <Row wrap="wrap" justify="space-between">
                <RealFeel realFeel={realFeel} />
                <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                  {desc}
                </Text>
              </Row>
            </Card.Footer>
          </Card> 
            
        </>
    )
}