import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Colors} from 'src/config/config';

export default class extends Component{
    render() {
        return (
            <View style={Styles.background}>
                <Image style={Styles.logo} source={require("images/logo.png")} />
            </View>
        )
    }
}

const Styles= StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.mainColor,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: "25%"
    }
});
