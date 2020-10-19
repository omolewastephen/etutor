import React, {Component} from 'react';
import {StyleSheet,
ScrollView,Dimensions,Text,ActivityIndicator,TouchableOpacity,TextInput,View,Image,StatusBar,Modal,ImageBackground,
KeyboardAvoidingView,AsyncStorage} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { Ionicons } from 'react-native-vector-icons';
import { Icon,Toast,Container,Button,Content,Root,List,Card,Spinner, CardItem, ListItem, Thumbnail, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import Colors from '../util/Colors';
import styles from '../util/Style';

export default class Loading extends Component {
    constructor(){
        super();
        this.state = {
        	greeting: "Hi User"
        }
    }

    render(){
    	return(
    		<View style={styles.Loading}>
             
                <Animatable.View animation="fadeIn">
                  <View>
                    <Animatable.Text animation="pulse" 
                    style={{
                      fontSize:35,
                      color:Colors.white,
                      textAlign:"center",
                      fontFamily:"Roboto_medium"
                     }}>
                     Federal Polytechnic Ilaro Intelligent Tutoring System
                  </Animatable.Text>
                  </View>
                     
                </Animatable.View>
              
            </View>
    	)
    }
}
