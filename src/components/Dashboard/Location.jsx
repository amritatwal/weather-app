import React from 'react'
import {Text} from "@nextui-org/react";

const Location = ({location}) => {
  return (
      <div>
          <Text size={30} b>{location}</Text>   
    </div>
  )
}

export default Location