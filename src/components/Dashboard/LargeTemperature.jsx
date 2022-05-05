import { Text } from "@nextui-org/react";

export default function LargeTemperature({ temperature }) {
  return (
    <>
      <Text
        css={{
            color: "$primary",
            fontSize: "$md"
        }}
        weight="bold"
      >
          {temperature}&#176;
      </Text>
    </>
  );
}