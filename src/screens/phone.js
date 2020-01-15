import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Picker, Image} from 'react-native';
import {Colors, FontSize} from 'src/config/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import Countries from 'src/countries';
import { SvgUri } from 'react-native-svg';
import MainButton from '../components/mainButton';


export default class extends Component{
    state= {
        phone: null,
        code: Countries[0].callingCodes[0]
    };
    render() {
        return (
            <View style={Styles.background}>
                <View style={Styles.top}>
                    <Icon name="chevron-left" size={16} ></Icon>
                </View>
                <View style={Styles.content}>
                    <Text style={Styles.header}>Enter Mobile Number</Text>
                    <View style={Styles.phone}>
                        {/*<SvgUri width={0} height={0} style={Styles.flag} uri={Countries[0].flag}/>*/}
                        <View style={Styles.pickerContainer}>
                            <Picker selectedValue={this.state.code} onValueChange={code => this.setState({code})} style={Styles.picker} textStyle={{fontSize: 220}}>
                                {
                                    Countries.map(country => <Picker.Item key={country.name} label={"+"+country.callingCodes[0]} value={country.callingCodes[0]} />)
                                }
                                {/*<Picker.Item label="+20" value="20"></Picker.Item>*/}
                            </Picker>
                        </View>
                        <View style={Styles.inputContainer}>
                            <TextInput textContentType="telephoneNumber" keyboardType="phone-pad" autoCompleteType="tel" value={this.state.phone} onChangeText={phone => this.setState({phone})} placeholder="1140463805" style={Styles.input}/>
                        </View>
                    </View>
                </View>
                <View style={Styles.bottom}>
                    <Text style={Styles.text}>By continuing, I confirm that i have read & agree to the
                        <Text style={{fontWeight: "bold"}}>Terms & conditions</Text> and <Text style={{fontWeight: "bold"}}>Privacy policy</Text></Text>
                    <MainButton onPress={() => alert("Submit")} style={{marginBottom: 15}} text="Submit"></MainButton>
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
    phone: {
        flexDirection: "row",
        paddingTop: 20,
        borderBottomColor: "#cecfd6",
        borderBottomWidth: .4,

    },
    flag: {
        width: 60,
        height: 60
    },
    pickerContainer: {
        flex: 1,
    },
    picker: {
        // transform: [{scaleX: 0.9}, {scaleY: 0.9}],
        height: 60,
    },
    inputContainer: {
        flex: 2
    },
    input: {
        height: 60,
        fontSize: 16
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
    }
});
