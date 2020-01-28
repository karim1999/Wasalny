import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, ScrollView} from 'react-native';
import {Colors, FontSize} from 'src/config/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainButton from '../components/mainButton';


export default class extends Component{
    state= {
        firstName: "",
        lastName: "",
        email: "",
        phone: null,
        password: null
    };
    render() {
        return (
            <ScrollView contentContainerStyle={Styles.background}>
                <View style={Styles.top}>
                    <Icon name="chevron-left" size={16} ></Icon>
                </View>
                <View style={Styles.content}>
                    <Text style={Styles.header}>Create Profile</Text>
                    <View style={Styles.form}>
                        <View style={Styles.inputContainer}>
                            <TextInput textContentType="name" keyboardType="default" autoCompleteType="name" value={this.state.firstName} onChangeText={firstName => this.setState({firstName})} placeholder="First Name" style={Styles.input}/>
                        </View>
                        <View style={Styles.inputContainer}>
                            <TextInput textContentType="familyName" keyboardType="default" autoCompleteType="name" value={this.state.lastName} onChangeText={lastName => this.setState({lastName})} placeholder="Last name" style={Styles.input}/>
                        </View>
                        <View style={Styles.inputContainer}>
                            <TextInput textContentType="emailAddress" keyboardType="email-address" autoCompleteType="name" value={this.state.email} onChangeText={email => this.setState({email})} placeholder="Email" style={Styles.input}/>
                        </View>
                        <View style={Styles.inputContainer}>
                            <TextInput textContentType="username" keyboardType="phone-pad" autoCompleteType="tel" value={this.state.phone} onChangeText={phone => this.setState({phone})} placeholder="Mobile Number" style={Styles.input}/>
                        </View>
                        <View style={Styles.inputContainer}>
                            <TextInput textContentType="password" keyboardType="default" autoCompleteType="password" value={this.state.password} onChangeText={password => this.setState({password})} secureTextEntry placeholder="Password" style={Styles.input}/>
                        </View>
                    </View>
                </View>
                <View style={Styles.bottom}>
                    <Text style={Styles.text}>By continuing, I confirm that i have read & agree to the
                        <Text style={{fontWeight: "bold"}}>Terms & conditions</Text> and <Text style={{fontWeight: "bold"}}>Privacy policy</Text></Text>
                    <MainButton onPress={() => alert("Submit")} style={{marginBottom: 15}} text="Submit"></MainButton>
                </View>
            </ScrollView>
        )
    }
}

const Styles= StyleSheet.create({
    background: {
        flexGrow: 1,
        backgroundColor: Colors.backgroundColor,
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
