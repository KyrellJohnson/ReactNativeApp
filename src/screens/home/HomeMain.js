import React, { useEffect } from 'react'
import { View, RefreshControl } from 'react-native'
import {
    Input,
    Stack,
    Box,
    HStack,
    Avatar,
    Button,
    Container,
    Heading,
    Text,
    VStack,
    ThreeDotsIcon,
    ScrollView,

} from 'native-base'
import { StyleSheet } from 'react-native'
import { TrendingCard } from '../../components'
import GetUserMainFeed from '../../services/GetUserMainFeed.service'

const wait = async (timeout) => {

    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function HomeMain() {

    const [refreshing, setRefreshing] = React.useState(false);
    const [posts, setPosts] = React.useState([]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        GetMainFeed();
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(()=>{
        GetMainFeed();
    })

    async function GetMainFeed() {
        const feed = await GetUserMainFeed();
        setPosts(feed);
    }

    const postLinks = posts.map(function (post, index) {
        return <TrendingCard
            title={post.title}
            content={post.content}
            avatar={""}
            timestamp={post.timestamp}
            icon={<ThreeDotsIcon />}
            width="100%"
            key={index}
        />
    })

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <HStack space={'md'} justifyContent={'center'} alignItems={'center'} paddingTop={5}>

                <Box space={4} w="75%" maxW="300px">
                    <Button size={'sm'}>Create New Post</Button>
                </Box>
            </HStack>
            <VStack space={3} style={styles.postsContainer}>
                {postLinks}
            </VStack>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    postsContainer: {
        paddingTop: 20,
        marginLeft: 12,
        marginRight: 12,
    }
})
