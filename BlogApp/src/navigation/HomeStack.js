import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../screens/HomeScreen"
import PostScreen from "../screens/PostScreen";

const PostStack = createStackNavigator();

const PostStackScreen = () => {
    return (
        <PostStack.Navigator initialRouteName="Home">
            <PostStack.Screen
                name="Home"
                component={HomeScreen}
            />
            <PostStack.Screen
                name="Post"
                component={PostScreen}
            />
        </PostStack.Navigator>
    );
}
export default PostStackScreen;