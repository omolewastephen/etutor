import React, {Component} from 'react';
import {StyleSheet,
ScrollView,Dimensions,Text,ActivityIndicator,TouchableOpacity,TextInput,View,Image,StatusBar,Modal,ImageBackground,
KeyboardAvoidingView,AsyncStorage} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import {Toast,Container,Button,Content,Root,List,Card,Spinner, CardItem, ListItem, Thumbnail, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import styles from '../util/Style';

export default class Message extends Component {
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
            <Button transparent onPress={() => {this.props.navigation.navigate('Drawer')}}>
              <Icon name='arrowleft' style={{fontSize:23,color: 'white'}} />
            </Button>
          </Left>
          <Body>
            <Title>Notification</Title>
          </Body>
          <Right>
            <Button transparent>
              
            </Button>
          </Right>
        </Header>
         <ScrollView>
         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>

         <View style={styles.messagePanel}>
            <Text style={styles.panelTitle}><Icons name='message-square' style={{fontSize:18,color: 'black'}} /> General Message</Text>
            <Text style={styles.panelBody}>
              All students are endeavour to update their profile details and do all assignment and also take 
              part in the Test. Thanks
            </Text>
         </View>
       </ScrollView>
      </Container>
        )
    }
}