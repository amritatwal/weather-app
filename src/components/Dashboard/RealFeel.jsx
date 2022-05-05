import { Text } from "@nextui-org/react";

export default function RealFeel({ realFeel }) {
    return (
        <>
            <Text
                css={{
                    color: "$primary",
                    fontSize: "$base"
                }}
                weight="normal"
            >
                Real Feel {temperature}&#176;
            </Text>
        </>
    );
}