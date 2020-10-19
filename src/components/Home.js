import React, {Component} from 'react';
import {StyleSheet,
ScrollView,Dimensions,Text,ActivityIndicator,TouchableOpacity,TextInput,View,Image,StatusBar,Modal,ImageBackground,
KeyboardAvoidingView,AsyncStorage} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import {Toast,Container,Button,Content,Root,List,Card,Spinner, CardItem, ListItem, Thumbnail, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import styles from '../util/Style';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
        	greeting: "Hi User"
        }
    }

    render(){
        return(
        <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.toggleDrawer()}}>
              <Icon name='menuunfold' style={{fontSize:23,color: 'white'}} />
            </Button>
          </Left>
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => {this.props.navigation.navigate('MessageScreen')}}>
              <Icon name='inbox' style={{fontSize:23,color: 'white'}} />
            </Button>
          </Right>
        </Header>
        
         <View style={styles.welcomePanel}>
           <Text style={styles.welcomePanelText}>Welcome, Omolewa Stephen - H/CS/18/0607</Text>
           <Text style={styles.welcomePanelText}>Semester: First Semester</Text>
         </View>

         <View style={styles.menuPanel}>
          <View style={styles.menuItemPanel}>
            <TouchableOpacity  style={styles.menuItem} onPress={() =>{ this.props.navigation.navigate('Courses')} }>
              <Image style={styles.icon} source={require('./images/video.png')}/>
              <Text style={styles.menuItemText}>My Courses</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.menuItemPanel}>
            <TouchableOpacity  style={styles.menuItem} onPress={() =>{this.props.navigation.navigate('Test')} }>
              <Image style={styles.icon} source={require('./images/exam.png')}/>
              <Text style={styles.menuItemText}>Test & Assessment</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.menuItemPanel}>
            <TouchableOpacity  style={styles.menuItem} onPress={() =>{this.props.navigation.navigate('MessageScreen')} }>
              <Image style={styles.icon} source={require('./images/mail.png')}/>
              <Text style={styles.menuItemText}>Messages</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.menuItemPanel}>
            <TouchableOpacity  style={styles.menuItem} onPress={() =>{this.props.navigation.navigate('Profile')} }>
              <Image style={styles.icon} source={require('./images/man.png')}/>
              <Text style={styles.menuItemText}>My Profile</Text>
            </TouchableOpacity >
          </View>
         </View>

    
      </Container>
        )
    }
}