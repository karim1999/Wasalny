import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'src/config/config';
import Btn from 'src/components/btn';

export default class extends Component{
    render() {
        return (
            <Btn onPress={this.props.onPress} style={[Styles.btn, this.props.style]} textStyle={[Styles.text, this.props.text]} text={this.props.text}></Btn>
        )
    }
}

const Styles= StyleSheet.create({
    btn: {
        backgroundColor: Colors.mainColor,
    },

    text: {
        color: "#fff"
    }
});
