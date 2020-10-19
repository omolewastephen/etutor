import {StyleSheet,Dimensions} from 'react-native';
import Colors from './Colors';
import { Col } from 'native-base';

const styles = StyleSheet.create({
   Loading: {
       backgroundColor: Colors.primary,
       flex: 1,
       justifyContent: "center",
       alignItems: "center"
   },
   container:{
    flex:1,
   },
    inputbox:{
        height: 45,
        backgroundColor: "#fff",
        color: "#40196d",
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 18,
        paddingVertical: 5,
        borderBottomWidth:1,
        borderBottomColor: Colors.primary,
        fontFamily:"Roboto",
    },
    buttonContainer: {
        backgroundColor:Colors.primary,
        paddingVertical: 10,
        borderRadius: 8,
    },
    buttonText: {
        textAlign: 'center',
        color:"#FFF",
        fontSize: 18,
        fontFamily: "Roboto"
    },
    image:{
        resizeMode: "contain",
        width:"100%",
        height:200,
    },
    logintext:{
        color: Colors.primary,
        fontSize: 30,
        fontFamily:"Roboto",
    },
    top:{
        height: "45%",
        alignItems:'center',
        justifyContent:"center"
    },
    center:{
        height:'10%',
        alignItems:'center',
        justifyContent:"center",
        padding:15
    },
    Header:{
        backgroundColor:Colors.primary
    },
    
    bottom:{
        margin:10,
        height:"45%",
    },
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        paddingTop: 20,
        color: Colors.white
      },
    sideMenuText:{
        fontSize:16,
        fontWeight: "700"
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
    sideText:{
        color:Colors.white,
        marginBottom:10,
        fontFamily:"Roboto",
    },
    welcomePanel:{
        height:"10%",
        width: "100%",
        padding:10,
        backgroundColor: Colors.basic,
        textAlignVertical: 'center',
        justifyContent:'center',
        marginBottom:5,

    },
    welcomePanelText:{
        fontSize:16,
        color:Colors.white,
        textTransform: "capitalize",
        lineHeight:25,
        marginBottom:10,
        marginLeft:10,
        marginRight: 10,
        fontFamily:"Roboto",
    },
    messagePanel:{
        height:"10%",
        width:"100%",
        padding:15,
        justifyContent:"center",
        textAlignVertical: 'center',
        marginBottom:10,
        
    },
    panelTitle:{
        fontWeight:"bold",
        fontSize:16,
        color: Colors.black,
        marginBottom: 10,
        fontFamily:"Roboto",
    },
    panelBody:{
        fontSize:16,
        color:Colors.lightblack
    },
    menuPanel:{
        height:"50%",
        margin:10,
        flexDirection:"row",
        flexWrap:"wrap",
        padding:5
    },
    menuItemPanel:{
        width:"50%",
        height:"50%",
        padding:5
    },
    menuItem:{
        flex:1,
        backgroundColor:"#fff",
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.basic,
        justifyContent:"center",
        alignItems:"center"
    },
    menuItemText:{
        color: Colors.primary,
        textTransform: "capitalize",
        fontSize:18,
        fontFamily:"Roboto",
    },
    icon:{
        width: 64,
        height:64,
    },
    coursePanel:{
        height:"15%",
        width:"100%",
        padding:20,
        justifyContent:"flex-start",
        marginBottom:10,
        marginTop:20,
        flex:1,
        flexDirection:"row",
        flex:1,
    },
    courseTitle:{
        fontSize:18,
        textTransform:"uppercase",
        color: Colors.black,
        textAlign:"left",
        marginLeft:5,
        marginRight:5,
        justifyContent:"center",
        fontFamily: "Roboto"
    },
    pageTitle:{
        fontSize:20,
        color: Colors.black,
        textTransform:"capitalize",
        fontFamily: "Roboto",
        justifyContent:"center",
        marginTop:5,
    },
    videoContainer:{
        flex: 1,
        justifyContent: 'center'
    },
    videoPanel:{
        height:280,
        width:"100%",
        borderWidth:1,
        borderColor:"#FFFFFF",
        marginBottom:10
    },
    courseHeader:{
        margin:10,
        paddingVertical:10,
    },
    courseContent:{
        margin:10
    },
    courseHTitle:{
        fontSize:24,
        fontFamily: "Roboto",
        margin:5
    },
    courseBody:{
        margin:10
    }

});

export default styles;