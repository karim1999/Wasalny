import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import {Colors} from 'src/config/config';
import MainButton from "src/components/mainButton";
import SecondaryButton from "src/components/secondaryButton";

export default class extends Component{
    render() {
        return (
            <ImageBackground source={require("images/background.jpg")} style={Styles.background}>
                <View style={Styles.layer}>
                    <Image style={Styles.logo} source={require("images/logo.png")} />
                    <View style={Styles.bottom}>
                        <MainButton onPress={() => alert("Sign In")} style={{marginBottom: 15}} text="Sign In"></MainButton>
                        <SecondaryButton onPress={() => alert("Sign Up")} text="Sign Up"></SecondaryButton>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const Styles= StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    layer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .6)",
        paddingTop: 25,
        paddingBottom: 25,
        justifyContent: "space-between"
    },
    logo: {
        width: "25%",
    },
    bottom: {
        width: "80%",
    },
});
