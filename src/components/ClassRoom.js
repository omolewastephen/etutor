import React, {Component} from 'react';
import {StyleSheet,
ScrollView,Dimensions,Text,ActivityIndicator,TouchableOpacity,TextInput,View,Image,StatusBar,Modal,ImageBackground,
KeyboardAvoidingView,AsyncStorage} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import {Toast,Container,Button,Content,Root,List,Card,Spinner, CardItem, ListItem, Thumbnail, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import styles from '../util/Style';
import CustomText from '../util/CustomText';
import MyWeb from '../util/MyWeb';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import Video from 'react-native-video-controls';


export default class ClassRoom extends Component {
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
            <Button transparent onPress={() => {this.props.navigation.navigate('LessonScreen')}}>
              <Icon name='arrowleft' style={{fontSize:23,color: 'white'}} />
            </Button>
          </Left>
          <Body>
            <Title>Classroom</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => {this.props.navigation.navigate('Drawer')}}>
              <Icon name='menuunfold' style={{fontSize:23,color: 'white'}} />
            </Button>
          </Right>
        </Header>
        <View style={{flex:1}}>
         <View style={styles.messagePanel}>
            <Text style={styles.pageTitle}><Icon name='solution1' style={{fontSize:25,color: 'black'}} /> Introduction to C++
            </Text>
         </View>

         <View style={styles.videoPanel}>
            <View style={styles.videoContainer}>
              <Video source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}   // Can be a URL or a local file.
               ref={(ref) => {
                 this.player = ref
               }}
               onBuffer={this.onBuffer}                // Callback when remote video is buffering
               onError={this.videoError} 
               useNativeControls={true}
               resizeMode='cover' 
               scrubbing = "1"
               usePoster={true} 
               navigator={this.props.navigator}                                   
               style={{
                        width:'100%',
                        height:"100%",
                        flex:1
                    }}  />
            </View>
         </View>
         <MyWeb/>
         </View>
      </Container>
        )
    }
}