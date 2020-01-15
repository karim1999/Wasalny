import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Picker, Image} from 'react-native';
import {Colors, FontSize} from 'src/config/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import Countries from 'src/countries';
import { SvgUri } from 'react-native-svg';
import MainButton from '../components/mainButton';
import OTPInputView from '@twotalltotems/react-native-otp-input'


export default class extends Component{
    state= {
        code: "",
        time: 60
    };
    componentDidMount(){
        setInterval(() => {
            if(this.state.time > 0)
                this.setState({time: this.state.time-1} )
        }, 1000);

    }

    render() {
        return (
            <View style={Styles.background}>
                <View style={Styles.top}>
                    <Icon name="chevron-left" size={16} ></Icon>
                </View>
                <View style={Styles.content}>
                    <Text style={Styles.header}>OTP Verification</Text>
                    <Text style={Styles.info}>Enter the 4-digit code sent to you at</Text>
                    <Text style={[Styles.info, {fontWeight: "bold"}]}>+91 98765 43210 <Text style={{color: Colors.mainColor}}>Edit</Text></Text>
                    <View style={Styles.phone}>
                        <OTPInputView
                            style={{width: '100%', height: 120}}
                            pinCount={4}
                            code={this.state.code}
                            onCodeChanged = {code => { this.setState({code})}}
                            autoFocusOnLoad
                            codeInputFieldStyle={Styles.underlineStyleBase}
                            codeInputHighlightStyle={Styles.underlineStyleHighLighted}
                            onCodeFilled = {(code => {
                                alert(code)
                            })}
                        />
                    </View>
                </View>
                <View style={Styles.bottom}>
                    {
                        this.state.time > 0 ?
                            <Text style={Styles.text}>Resent in <Text style={{fontWeight: "bold"}}>{this.state.time}</Text></Text>
                            :
                            <Text style={[Styles.text, {fontWeight: "bold", color: Colors.mainColor}]}>Resent</Text>
                    }
                    <MainButton onPress={() => alert("Submit")} style={{marginBottom: 15}} text="Submit"></MainButton>
                </View>
            </View>
        )
    }
}

const Styles= StyleSheet.create({
    background: {
        flex: 1
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
    info: {
        color: "grey",
        fontSize: FontSize.size3,
        paddingTop: 10
    },
    phone: {
    },
    flag: {
        width: 60,
        height: 60
    },
    bottom: {
        alignSelf: "center",
        width: "80%",
        flex: 1,
        justifyContent: "flex-end"
    },
    text: {
        textAlign: "center",
        marginBottom: 10,
        color: "grey",
        fontSize: 13
    },
    underlineStyleBase: {
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: Colors.mainColor,
    },
});
