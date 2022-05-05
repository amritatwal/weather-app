import { Card, Grid, Row, Text } from "@nextui-org/react";

function DailyCard({ location, apiResponse, date }) {
  return (
    <Card hoverable clickable onClick={() => console.log("ive been clicked")}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          objectFit="cover"
          src={`https://openweathermap.org/img/wn/${apiResponse.weather[0].icon}@4x.png`}
          width="100%"
          height={140}
          alt={date}
        />
      </Card.Body>
      <Card.Footer justify="flex-start">
        <Row wrap="wrap" justify="space-between">
          <Text b>{date}</Text>
          <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
            {`${Math.round(apiResponse.temp.day)}°C`}
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
}
export default DailyCard;
