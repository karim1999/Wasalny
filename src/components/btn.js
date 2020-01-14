import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {FontSize} from 'src/config/config';

export default class extends Component{
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[Styles.btn, this.props.style]}>
                <Text style={[Styles.text, this.props.textStyle]}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const Styles= StyleSheet.create({
    btn: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 20
    },

    text: {
        fontSize: FontSize.size2
    }
});
