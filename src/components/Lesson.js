import React, {Component} from 'react';
import {StyleSheet,
ScrollView,Dimensions,Text,ActivityIndicator,TouchableOpacity,TextInput,View,Image,StatusBar,Modal,ImageBackground,
KeyboardAvoidingView,AsyncStorage} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import {Toast,Container,Button,Content,Root,List,Card,Spinner, CardItem, ListItem, Thumbnail, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import styles from '../util/Style';

export default class Lesson extends Component {
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
            <Button transparent onPress={() => {this.props.navigation.navigate('Courses')}}>
              <Icon name='arrowleft' style={{fontSize:23,color: 'white'}} />
            </Button>
          </Left>
          <Body>
            <Title>Course Contents </Title>
          </Body>
          <Right>
            <Button transparent>
              
            </Button>
          </Right>
        </Header>
         <ScrollView>
         <TouchableOpacity onPress={() =>{ this.props.navigation.navigate('VideoScreen') } } style={styles.coursePanel}>
          <Text style={styles.courseIcon}><Icon name='pushpin' style={{fontSize:30,color: '#009631'}} /></Text>
          <Text style={styles.courseTitle}>
            Introduction to programming using C++ Language
          </Text>   
       </TouchableOpacity>

       <TouchableOpacity style={styles.coursePanel}>
          <Text style={styles.courseIcon}><Icon name='pushpin' style={{fontSize:30,color: '#009631'}} /></Text>
          <Text style={styles.courseTitle}>
            Introduction to programming using Business Language
          </Text>   
       </TouchableOpacity>

       <TouchableOpacity style={styles.coursePanel}>
          <Text style={styles.courseIcon}><Icon name='pushpin' style={{fontSize:30,color: '#009631'}} /></Text>
          <Text style={styles.courseTitle}>
            Introduction to programming using PHP Language
          </Text>   
       </TouchableOpacity>

        
       </ScrollView>
      </Container>
        )
    }
}