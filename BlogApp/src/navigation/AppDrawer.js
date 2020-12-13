import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeTabScreen from "./../navigation/HomeTab";
import ProfileStackScreen from "../navigation/ProfileStack"

const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen name="Home" component={HomeTabScreen} />
            <AppDrawer.Screen name="Profile" component={ProfileStackScreen} />
        </AppDrawer.Navigator>
    );
}

export default AppDrawerScreen;