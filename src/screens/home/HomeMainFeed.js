import React, { useEffect } from 'react'
import { RefreshControl } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Box,
    HStack,
    Icon,
    VStack,
    ScrollView,
    Fab,
    View
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
        console.log("!");
    }, []);

    useEffect(() => {
        GetMainFeed();
    }, []);

    async function GetMainFeed() {
        const feed = await GetUserMainFeed()
            .then((newFeed)=>setPosts(newFeed))
            .catch((err)=>console.log("error feed" + err))
            .finally(()=>setRefreshing(false));
        
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
            content={(post.content).substring(0,150)}
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
        <>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} stickyHeaderIndices={[0]}>
                <HStack space={'md'} justifyContent={'center'} alignItems={'center'} paddingTop={5}>

                    <Box space={4} w="75%" maxW="300px">

                    </Box>
                </HStack>
                {/* List users posts & subscribed to posts */}
                <VStack space={3} style={styles.postsContainer}>
                    {postLinks}
                </VStack>

            </ScrollView>
            <Fab renderInPortal={false}
                shadow={2}
                size="sm"
                icon={<Icon color="white" as={MaterialCommunityIcons} name="pencil-plus" size="md" />}
                marginRight={2}
                marginBottom={2}
            />
        </>
    )
}

const styles = StyleSheet.create({
    postsContainer: {
        paddingTop: 20,
        marginLeft: 12,
        marginRight: 12,
    }
})
