import { createStackNavigator } from "@react-navigation/stack";
import PostView from "../../screens/home/PostView";
import HomeTabNavigator from "./HomeTabNavigation";

const Stack = createStackNavigator();


export default function HomeStackNavigator() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="HomeMain" component={HomeTabNavigator} options={{
                title: 'Feed',
            }} />
            <Stack.Screen name="Post" component={PostView} options={{
                headerBackTitle: "Cancel"
            }}/>
        </Stack.Navigator>
    );
}
