import React from "react";
import { Button } from "react-native";
import { View, StyleSheet } from "react-native";

const ProfileScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}>Profile Screen</Text>
            <Button
                title='Edit Profile'
                color='#1e847f'
                onPress={
                    function () {
                        props.navigation.navigate("Edit Profile");
                        console.log("edit profile Button is clicked");
                    }
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "blue",
    },
    viewStyle: {
        flex: 1,
        backgroundColor: "#e2e7fe"
    },
});

export default ProfileScreen;