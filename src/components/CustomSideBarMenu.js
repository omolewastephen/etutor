 import React, {Component} from 'react';
import {StyleSheet,
ScrollView,Dimensions,Text,ActivityIndicator,TouchableOpacity,TextInput,View,Image,StatusBar,Modal,ImageBackground,
KeyboardAvoidingView,AsyncStorage} from 'react-native';
import { createDrawerNavigator,createStackNavigator,createSwitchNavigator, createAppContainer,DrawerItems } from "react-navigation";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import {Toast,Container,Button,Content,Root,List,Card,Spinner, CardItem, ListItem, Thumbnail, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import styles from '../util/Style';

export default class CustomSideBarMenu extends Component {
    constructor(){
        super(props);
        this.state = {
          greeting: "Hi User"
        }
        this.profileImage = "https://user.marks222.com/uploads/editors/default-avatar.png";
    }

    render(){
        return(
            <View style={styles.sideMenuContainer}>
                  <Image
                    source={{ uri: this.profileImage }}
                    style={styles.sideMenuProfileIcon}
                  />
                  <Text style={styles.sideMenuText}>OMOLEWA STEPHEN</Text>
                  <Text style={styles.sideMenuText}> Computer Science, HND 2</Text>
                   <ScrollView>
                      <DrawerItems {...props} />
                  </ScrollView>
            </View>
        )
    }
}


 