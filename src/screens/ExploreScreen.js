import React from 'react';
import Firebase from '../../config/firebase';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Input, Box, Center, NativeBaseProvider } from "native-base";
import CreatePost from '../services/CreatePost.service';

export default function ExploreScreen() {
    const auth = Firebase.auth;

    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };

    const postContent = async() => {
        try{
            await CreatePost({postContent: "1", id: 123});
        }catch(e){
            console.log(e);
        }
    }


    return (
        <Box alignItems="center">
            <Input mx="3" placeholder="Input" w="100%" />
            <Button  title="Press Me" onPress={postContent}>Hello WOlrd</Button>
        </Box>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'Black',
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10
    }
})