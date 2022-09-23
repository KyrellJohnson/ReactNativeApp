import { Text } from "native-base";

export default function PostView({ route }) {

    const { post } = route.params;

    return (
        <Text>POST ID: {post.postId}</Text>
    );







}