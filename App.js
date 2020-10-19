import React from 'react';

import home from './src/components/Home';
import profile from './src/components/Profile';
import login from './src/components/Login';
import Loading from './src/components/Loading';
import courses from './src/components/Courses';
import test from './src/components/Test';
import feedback from './src/components/Feedback';
import message from './src/components/Message';
import lesson from './src/components/Lesson';
import video from './src/components/ClassRoom';

// import CustomSideBarMenu from './src/components/CustomSideBarMenu';

import { AppRegistry,View, Image, TouchableOpacity,Text,ScrollView} from 'react-native';
import {Header,Left,Button,Body,Title} from 'native-base';
import { createDrawerNavigator,createStackNavigator,createSwitchNavigator, createAppContainer,DrawerItems } from "react-navigation";
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import styles from './src/util/Style';
const proileImage = "https://user.marks222.com/uploads/editors/default-avatar.png";

const AuthStack = createStackNavigator(
  {
    LoginScreen: {screen:login,navigationOptions: { header: null }},
  },
  {
    initialRouteName: "LoginScreen",
  }
);



const DrawerNavigator = createDrawerNavigator(
  {
      Home: {
        screen: home,
        navigationOptions: {
          drawerLabel: "Dashboard",
          drawerIcon: config => <Icon name='home' style={{fontSize:23,color: 'white'}} />
        },
      },

      Courses:{
        screen: courses,
        navigationOptions:{
          drawerLabel: "My Courses",
          drawerIcon: config => <Icon name='folderopen' style={{fontSize:23,color: 'white'}} />
        }
      },

      Test:{
        screen: test,
        navigationOptions:{
          drawerLabel: "Test & Assessment",
          drawerIcon: config => <Icons name='book-open' style={{fontSize:23,color: 'white'}} />
        }
      },

      Profile:{
          screen: profile,
          navigationOptions: {
            drawerLabel: "Profile",
            drawerIcon: config => <Icon name='user' style={{fontSize:23,color: 'white'}} />
          }
      },

      Feedback:{
        screen: feedback,
        navigationOptions: {
            drawerLabel: "Remarks & Complaints",
            drawerIcon: config => <Icon name='form' style={{fontSize:23,color: 'white'}} />
        }
      },

      Logout:{
        screen: feedback,
        navigationOptions: {
            drawerLabel: "Sign Out",
            drawerIcon: config => <Icon name='poweroff' style={{fontSize:23,color: 'white'}} />
        }
      }
  },
  {
    contentComponent: (props) => (
      <View style={styles.sideMenuContainer}>
        <Image
          source={{ uri: proileImage }}
          style={styles.sideMenuProfileIcon}
        />
        <Text style={styles.sideMenuText}>OMOLEWA STEPHEN</Text>
        <Text style={styles.sideMenuText}> Computer Science, HND 2</Text>
         <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
      </View>
    ),
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(0,150,49,.9)',
    overlayColor: 'rgba(0,0,0,.5)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#cc9933',
    },
  }
);

const UtilStack = createStackNavigator(
  {
    Drawer: {screen:DrawerNavigator,navigationOptions: { header: null }},
    MessageScreen: {screen:message,navigationOptions: { header: null }},
    LessonScreen: {screen:lesson,navigationOptions: { header: null }},
    VideoScreen: {screen:video,navigationOptions: { header: null }},
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
  {
    Auth: AuthStack,
    App: UtilStack,
  }
));


export default class App extends React.Component {
  constructor(){
    super();
    this.profileImage = "";
    this.state = {
      fontLoaded: false
    }
  }

  render() {
    let that = this;
    setTimeout(function(){that.setState({timePassed: true})}, 3000);
      if(!this.state.timePassed){
          return(
            <Loading/>
          )
        }else{
      return(
        <AppContainer/>
      )
    }
  }
}
