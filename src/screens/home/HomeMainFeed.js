import React, { useEffect } from 'react'
import { RefreshControl } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Box,
    HStack,
    Button,
    VStack,
    ScrollView,
} from 'native-base'
import { StyleSheet } from 'react-native'
import { Card } from '../../components'
import GetUserMainFeed from '../../services/GetUserMainFeed.service'

const wait = async (timeout) => {

    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function HomeMainFeed({ navigation }) {

    const [refreshing, setRefreshing] = React.useState(false);
    const [posts, setPosts] = React.useState([]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(100)
        GetMainFeed();
        wait(800).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        GetMainFeed();
    }, []);

    async function GetMainFeed() {
        const feed = await GetUserMainFeed();
        setPosts(feed);
    }

    function ViewPost(currentPost) {

        console.log(currentPost)

        navigation.navigate('Post', {
            post: currentPost
        })
    }

    const postLinks = posts.map(function (post, index) {
        return <Card
            onClick={() => ViewPost(post)}
            content={post.content}
            avatar={"https://avatars.githubusercontent.com/u/6368050?s=40&v=4"}
            timestamp={post.timestamp}
            iconThreeDots={
                <MaterialCommunityIcons name="dots-horizontal" color="black" size={24} />
            }
            iconComment={
                <MaterialCommunityIcons name="chat-outline" color="black" size={24} />
            }
            iconFav={
                <MaterialCommunityIcons name="cards-heart-outline" color="black" size={24} />
            }
            favCount={post.favCount}
            commentCount={post.commentCount}
            type={'post'}
            key={index}
        />
    })

    return (

        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} stickyHeaderIndices={[0]}>
            <HStack space={'md'} justifyContent={'center'} alignItems={'center'} paddingTop={5}>

                <Box space={4} w="75%" maxW="300px">
                    <Button size={'sm'}>Create New Post</Button>
                </Box>
            </HStack>
            {/* List users posts & subscribed to posts */}
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
