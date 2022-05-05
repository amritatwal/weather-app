import { Card, Grid, Row, Text } from "@nextui-org/react";
export default function TempCard({selectedData}){
    const weather = selectedData.weather
    
  const desc = weather[0].description
  
  return (
        <>
           <Card hoverable>
            <Card.Body css={{ p: 0 }}>
             <p>Large Temperature</p>
            </Card.Body>
            <Card.Footer justify="flex-start">
              <Row wrap="wrap" justify="space-between">
                <Text b>Real Feel text</Text>
                <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                  {desc}
                </Text>
              </Row>
            </Card.Footer>
          </Card> 
            
        </>
    )
}