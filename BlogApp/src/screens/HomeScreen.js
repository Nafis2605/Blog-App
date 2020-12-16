import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, FlatList, ActivityIndicator } from 'react-native';
import { Card, Button, Input, Header } from "react-native-elements";
import { useNetInfo } from "@react-native-community/netinfo";

import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import PostCard from "./../components/PostCard";
import HeaderHome from "../components/HeaderHome";

import * as firebase from "firebase"
import "firebase/firestore";


const Separator = () => {
    return (
        <View style={styles.SeparatorStyle} />
    );
}
const HomeScreen = (props) => {

    const netInfo = useNetInfo();
    if (netInfo.type != "unknown" && !(netInfo.isInternetReachable)) {
        alert("No Internet!")
    }

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");



    const loadPosts = async () => {
        setLoading(true)
        firebase
            .firestore()
            .collection('posts')
            .orderBy("created_at", "desc")
            .onSnapshot((querySnapshot) => {
                let temp_posts = []
                querySnapshot.forEach((doc) => {
                    temp_posts.push(
                        {
                            id: doc.id,
                            data: doc.data()
                        }
                    )
                    setPosts(temp_posts)
                    setLoading(false)
                });
            }).catch((error) => {
                alert(error)
                setLoading(false)
            })
    };


    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <AuthContext.Consumer>
            {
                (auth) =>
                (
                    <View style={styles.ViewStyle}>
                        <HeaderHome
                            DrawerFunction={() => {
                                props.navigation.toggleDrawer();
                            }}
                        />
                        <Card>
                            <Input
                                placeholder="What's On Your Mind?"
                                leftIcon={<Entypo name="pencil" size={24} color="black" />}
                                multiline={true}
                                onChangeText={(currentText) => {
                                    setInput(currentText);
                                }
                                }
                            />
                            <Button title="Post"
                                type="outline"
                                onPress=
                                {
                                    function () {
                                        setLoading(true)
                                        firebase.firestore().collection("posts").add({
                                            userId: auth.currentUser.uid,
                                            body: input,
                                            author: auth.currentUser.displayName,
                                            created_at: firebase.firestore.Timestamp.now(),
                                            likes: [],
                                            comment: [],
                                        }).then(() => {
                                            setLoading(false)
                                            alert("Post created successfully!")
                                        }).catch((error) => {
                                            setLoading(false)
                                            alert(error)
                                        })
                                    }}
                            />
                        </Card>

                        <ActivityIndicator
                            size="large"
                            color="dodgerblue"
                            animating={loading}
                        />

                        <FlatList
                            data={posts}
                            showsVerticalScrollIndicator={false}
                            renderItem={
                                ({ item }) => {
                                    return (
                                        <PostCard
                                            author={item.data.author}
                                            body={item.data.body}
                                        />
                                    )
                                }
                            }
                        />

                    </View>
                )
            }
        </AuthContext.Consumer>
    )
}
const styles = StyleSheet.create(
    {
        TextStyle: {
            fontSize: 25,
            color: "#9C27B0",
            textAlign: "center",
        },
        ViewStyle: {
            flex: 1,
            backgroundColor: "#e2e7fe"
        },

        SeparatorStyle: {
            marginVertical: 5
        }
    }
);
export default HomeScreen;