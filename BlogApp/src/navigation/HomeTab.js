import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

import HomeStackScreen from '../navigation/HomeStack'
import NotificationStackScreen from '../navigation/NotificationStack'

const HomeTab = createMaterialBottomTabNavigator();

const HomeTabScreen = () => {
    return (
        <HomeTab.Navigator initialRouteName="Home">
            <HomeTab.Screen
                name="Home"
                component={HomeStackScreen}
                options={
                    {
                        tabBarLabel: "Home",
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Entypo name="home" color="white" size={26} />
                            ) : (
                                    <AntDesign name="home" color="white" size={22} />
                                ),
                    }
                }
            />
            <HomeTab.Screen
                name="Notification"
                component={NotificationStackScreen}
                options={{
                    tabBarLabel: "Notifications",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="ios-notifications" size={26} color="white" />
                        ) : (
                                <Ionicons
                                    name="ios-notifications-outline"
                                    size={22}
                                    color="white"
                                />
                            ),
                }}
            />
        </HomeTab.Navigator>
    )
}
export default HomeTabScreen;