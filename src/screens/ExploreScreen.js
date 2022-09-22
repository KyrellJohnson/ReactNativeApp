import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { Box, Heading, Badge, HStack, Pressable,ThreeDotsIcon } from "native-base";
import { TrendingCard } from "../components";

export default function ExploreScreen({ navigation }) {

    const topicLinks = [
        {
            title: "Trending",
            link: () => navigation.navigate('Home') //render a different view
        },
        {
            title: "ESports",
            link: () => { }
        },
        {
            title: "Tournaments",
            link: () => { }
        },
        {
            title: "Events",
            link: () => { }
        },
        {
            title: "Upcoming Releases",
            link: () => { }
        },
        {
            title: "Streaming",
            link: () => { }
        },
    ]

    const topicLinkList = topicLinks.map(function (topic, index) {
        return <Pressable onPress={topic.link} key={index}><Badge colorScheme="indigo" borderRadius={"lg"} padding="2">{topic.title}</Badge></Pressable>;
    })


    return (
        <View>
            <Heading style={styles.exploreTitle}>Trending</Heading>
            <Box paddingLeft={3}>

                <ScrollView horizontal={true}>
                    <HStack paddingBottom={3} space={{
                        base: 2,
                        sm: 4
                    }} mx={{
                        base: "auto",
                        md: 0
                    }}>
                        {topicLinkList}
                    </HStack>
                </ScrollView>

                {/* 
                    Horizntal Scroll View of Trending Posts
                */}
                <ScrollView horizontal={true}>
                    <TrendingCard title="Hello New Title"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non vehicula sapien. Donec tincidunt sem in nibh sollicitudin varius. Cras volutpat urna at sapien egestas, sit amet viverra dui hendrerit."
                        timestamp="10 minutes ago"
                        padding_right={2}  />
                    <TrendingCard title="My New Title 2"
                        subtitle="this is a subtitle"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non vehicula sapien. Donec tincidunt sem in nibh sollicitudin varius. Cras volutpat urna at sapien egestas, sit amet viverra dui hendrerit."
                        timestamp="45 minutes ago" 
                        padding_right={2}/>
                    <TrendingCard title="Third Card"
                        subtitle="this is a subtitle"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non vehicula sapien. Donec tincidunt sem in nibh sollicitudin varius. Cras volutpat urna at sapien egestas, sit amet viverra dui hendrerit."
                        timestamp="2 hours ago"
                        padding_right={2} 
                        />
                </ScrollView>
            </Box>
        </View>
    );
}

const styles = StyleSheet.create({
    exploreTitle: {
        fontSize: 30,
        paddingLeft: "5%",
        paddingTop: "5%",
        paddingBottom: "5%"
    }
});
