
import {
    Box,
    HStack,
    Stack,
    Heading,
    Text,
    Avatar,
    Pressable,
} from "native-base";

const Card = (props) => {

    return (
        <Box alignItems="center" paddingLeft={0} paddingRight={props.padding_right}>
            <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                w={props.type == "post" ? "100%" : 80}
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
                    {props.type != "post" ?
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                {props.title}
                            </Heading>
                            {props.subtitle &&
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
                            }
                        </Stack>
                        :
                        <HStack space={2} justifyContent="space-between" alignItems="center">
                            <HStack alignItems={'center'}>
                                <Avatar bg="green.500" size={'sm'} source={{
                                    uri: props.avatar
                                }}></Avatar>
                                <Text fontSize="md">
                                    @admin
                                </Text>
                            </HStack>

                            <Box>
                                {props.iconThreeDots}
                            </Box>
                        </HStack>
                    }
                    <Text fontWeight="400">
                        {props.content}
                        {props.content.length >= 150 && props.type == "post" ? " ..." : null}
                    </Text>
                    <Text bold>{props.content.length >= 150 && props.type == "post" ? "Tap to Continue Reading" : null}</Text>
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
                        <HStack alignItems="center" space={4}>

                            <HStack space={1}>
                                <Text>{props.favCount}</Text>
                                <Box>
                                    {props.iconFav}
                                </Box>
                            </HStack>

                            <HStack space={1}>
                                <Text>{props.commentCount}</Text>
                                <Pressable onPress={props.onClick}>
                                    <Box>
                                        {props.iconComment}
                                    </Box>
                                </Pressable>

                            </HStack>
                        </HStack>

                    </HStack>
                </Stack>
            </Box>
        </Box>
    );
}

export default Card;