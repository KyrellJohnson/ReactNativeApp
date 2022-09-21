
import {
    Box,
    AspectRatio,
    Image,
    Center,
    HStack,
    Stack,
    Heading,
    Text
} from "native-base";

const TrendingCard = (props) => {
    return (
        <Box alignItems="center" paddingLeft={0} paddingRight={3}>
            <Box
                maxW="80"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                }}
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
                _light={{
                    backgroundColor: "gray.50",
                }}
            >
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            {props.title}
                        </Heading>
                        <Text
                            fontSize="xs"
                            _light={{
                                color: "violet.500",
                            }}
                            _dark={{
                                color: "violet.400",
                            }}
                            fontWeight="500"
                            ml="-0.5"
                            mt="-1"
                        >
                            {props.subtitle}
                        </Text>
                    </Stack>
                    <Text fontWeight="400">
                        {props.content}
                    </Text>
                    <HStack
                        alignItems="center"
                        space={4}
                        justifyContent="space-between"
                    >
                        <HStack alignItems="center">
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200",
                                }}
                                fontWeight="400"
                            >
                                {props.timestamp}
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    );
}

export default TrendingCard;