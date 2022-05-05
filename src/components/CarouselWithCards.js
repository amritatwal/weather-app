import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, Grid, Row, Text } from "@nextui-org/react";

import DailyCard from "./Card";


//npm i react-responsive-carousel
//

function CarouselWithCards({apiResponse, setSelectedDay}) {
  const location = "Birmingham";

  return (
    <div className="App">
      <Carousel showThumbs={false} emulateTouch={true} showStatus={false}>
        <Row>
          <DailyCard
            location={location}
            apiResponse={apiResponse[0]}
            date={`${location} - Today`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[1]}
            date={`${location} - Tomorrow`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[2]}
            date={`${location} - Sat 7th May`}
          />
        </Row>
        <Row>
          <DailyCard
            location={location}
            apiResponse={apiResponse[3]}
            date={`${location} - Sun 8th May`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[4]}
            date={`${location} - Mon 9th May`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[5]}
            date={`${location} - Tue 10th May`}
          />
        </Row>
        <Row>
          <DailyCard
            location={location}
            apiResponse={apiResponse[6]}
            date={`${location} - Wed 11th May`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[7]}
            date={`${location} - Thur 12th May`}
          />
          <DailyCard
            location={location}
            apiResponse={apiResponse[0]}
            date={`${location} - Today`}
          />
        </Row>
      </Carousel>
    </div>
  );
}

export default CarouselWithCards;
