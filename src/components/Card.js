import { Card, Grid, Row, Text } from "@nextui-org/react";

function DailyCard({ location, apiResponse, date }) {
  return (
    <Card hoverable clickable onClick={() => console.log("ive been clicked")}>
      <Card.Body css={{ p: 0 }}>
        <Text h4>{date}</Text>
        <Row>
          <Text h1>{`${Math.round(apiResponse.temp.day)}°`}</Text>
          <Card.Image
            objectFit="cover"
            src={`https://openweathermap.org/img/wn/${apiResponse.weather[0].icon}@4x.png`}
            width="%"
            height={140}
            alt={date}
          />
        </Row>
      </Card.Body>
      <Card.Footer justify="flex-start">
        <Row wrap="wrap" justify="space-between"></Row>
      </Card.Footer>
    </Card>
  );
}
export default DailyCard;
