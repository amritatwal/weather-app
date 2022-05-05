import { Card, Grid, Row, Text } from "@nextui-org/react";
export default function TempCard(){
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
                  description of the weather
                </Text>
              </Row>
            </Card.Footer>
          </Card> 
            
        </>
    )
}