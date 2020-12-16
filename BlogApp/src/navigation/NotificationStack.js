import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import NotificationScreen from "../screens/NotificationScreen"
import PostScreen from "../screens/PostScreen";

const NotificationStack = createStackNavigator();

const NotificationStackScreen = () => {
    return (
        <ProfileStack.Navigator initialRouteName="Notification">
            <ProfileStack.Screen
                name="Notification"
                component={NotificationScreen}
            />
            <ProfileStack.Screen
                name="Post"
                component={PostScreen}
            />
        </ProfileStack.Navigator>
    );
}
export default NotificationStackScreen;