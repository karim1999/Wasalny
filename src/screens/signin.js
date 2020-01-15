import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Picker, Image} from 'react-native';
import {Colors, FontSize} from 'src/config/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import Countries from 'src/countries';
import MainButton from '../components/mainButton';
import SecondaryButton from '../components/secondaryButton';


export default class extends Component{
    state= {
        phone: null,
        password: null
    };
    render() {
        return (
            <View style={Styles.background}>
                <View style={Styles.top}>
                    <Icon name="chevron-left" size={16} ></Icon>
                </View>
                <View style={Styles.content}>
                    <Text style={Styles.header}>Sign in</Text>
                    <View style={Styles.form}>
                        <View style={Styles.inputContainer}>
                            <TextInput textContentType="username" keyboardType="phone-pad" autoCompleteType="tel" value={this.state.phone} onChangeText={phone => this.setState({phone})} placeholder="Mobile Number" style={Styles.input}/>
                        </View>
                        <View style={Styles.inputContainer}>
                            <TextInput textContentType="password" keyboardType="default" autoCompleteType="password" value={this.state.password} onChangeText={password => this.setState({password})} secureTextEntry placeholder="Password" style={Styles.input}/>
                        </View>
                    </View>
                </View>
                <View style={Styles.bottom}>
                    <MainButton onPress={() => alert("Submit")} style={{marginBottom: 15}} text="Submit"></MainButton>
                    <SecondaryButton onPress={() => alert("Forgot Password")} text="Forgot Password"></SecondaryButton>
                </View>
            </View>
        )
    }
}

const Styles= StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    top: {
        padding: 20,
    },
    content: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {
        fontSize: FontSize.size1
    },
    form: {
    },
    inputContainer: {
        paddingTop: 20,
        borderBottomColor: "#cecfd6",
        borderBottomWidth: .4
    },
    input: {
        height: 60,
        fontSize: 16
    },
    bottom: {
        alignSelf: "center",
        width: "80%",
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 20
    },
    text: {
        textAlign: "center",
        marginBottom: 10,
        color: "grey",
        fontSize: 13
    }
});
