import { Text } from "@nextui-org/react";

export default function SmallTemperature({ temperature }) {
  return (
    <>
      <Text
        css={{
            color: "$primary",
            fontSize: "$sm"
        }}
        weight="normal"
      >
          {temperature}&#176;
      </Text>
    </>
  );
}