import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, Grid, Row, Text } from "@nextui-org/react";

import DailyCard from "./Card";

//npm i react-responsive-carousel
//

function CarouselWithCards({ location, apiResponse, setSelectedDay }) {
  

  return (
    <div className="App">
      <Carousel showThumbs={false} emulateTouch={true} showStatus={false}>
        <Row>
          <DailyCard
            
            location={location}
            apiResponse={apiResponse[0]}
            date={`${location} - Today`}
            onClick={() => setSelectedDay(0)}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[1]}
            date={`${location} - Tomorrow`}
            onClick={() => setSelectedDay(1)}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[2]}
            date={`${location} - Sat 7th May`}
            onClick={() => setSelectedDay(2)}
          />
        </Row>
        <Row>
          <DailyCard
            location={location}
            apiResponse={apiResponse[3]}
            date={`${location} - Sun 8th May`}
            onClick={() => setSelectedDay(3)}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[4]}
            date={`${location} - Mon 9th May`}
            onClick={() => setSelectedDay(4)}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[5]}
            date={`${location} - Tue 10th May`}
            onClick={() => setSelectedDay(5)}
          />
        </Row>
        <Row>
          <DailyCard
            location={location}
            apiResponse={apiResponse[6]}
            date={`${location} - Wed 11th May`}
            onClick={() => setSelectedDay(6)}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[7]}
            date={`${location} - Thur 12th May`}
            onClick={() => setSelectedDay(7)}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[0]}
            date={`${location} - Today`}
            onClick={() => setSelectedDay(0)}
          />
        </Row>
      </Carousel>
    </div>
  );
}

export default CarouselWithCards;
