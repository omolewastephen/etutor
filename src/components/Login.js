import React, {Component} from 'react';
import {StyleSheet,
ScrollView,Dimensions,Text,ActivityIndicator,TouchableOpacity,TextInput,View,Image,StatusBar,Modal,ImageBackground,
KeyboardAvoidingView,AsyncStorage} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import { Toast,Container,Button,Content,Root,List,Card,Spinner, CardItem, ListItem, Thumbnail, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import styles from '../util/Style';



export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            matric: '',
            password: '',
            ActivityLoader: false,
            anotherip: '',
            URL:'',
		  }  
	}
	
	doLogin = () => {
		const {matric,password} = this.state;
		this.props.navigation.navigate('App');
	}

    render(){
        return(
		<Container>
				<View style={styles.top}>
					<Image style={styles.image} source={require('./images/logo.png')} />
				</View>
				<View style={styles.center}>
					<Text style={styles.logintext}>Student Login</Text>
				</View>
		
				<View style={styles.bottom}>
				<KeyboardAvoidingView behavior={"height"}  style={styles.container}>
						<TextInput
							style={styles.inputbox}
							placeholder="H/CS/00/0000"
							returnKeyType="next"
							autoCapitalize="none"
							autoCorrect={false}
							onSubmitEditing = {() => this.passwordInput.focus()}
							placeholderTextColor="#ccc"
							name="username"
							keyboardType="email-address"
							blurOnSubmit={true}
							onChangeText={(TextInput) => this.setState({matric: TextInput})}
						/>

						<TextInput
							style={styles.inputbox}
							placeholder="Password"
							returnKeyType="go"
							autoCapitalize="none"
							secureTextEntry
							blurOnSubmit={true}
							ref={(input) => this.passwordInput = input}
							placeholderTextColor="#ccc"
							name="password"
							onChangeText={(TextInput) => this.setState({password: TextInput})}
						/>
				
						<TouchableOpacity style={styles.buttonContainer} onPress={ this.doLogin }>
							{
							this.state.ActivityLoader ?(
								<Text style={[{fontFamily:"Roboto",textAlign: "center",color:"#FFF",fontSize:22}]}>
									<Icon style={{fontSize: 23, color: 'white'}} name="clockcircle"/> PLEASE WAIT 
								</Text>
								): <Text style={{fontFamily:"Roboto",textAlign: "center",color:"#FFF",fontSize:22}}> LOG IN <Icon style={{fontSize: 23, color: 'white'}} name="rightcircle"/></Text>
							}
						</TouchableOpacity>
					</KeyboardAvoidingView> 
				</View>  
			</Container>
        )
    }
}