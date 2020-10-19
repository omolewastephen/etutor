import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {
  Text,
  StyleSheet,
} from 'react-native';
export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://gigdeliveryservices.com/shipping/sample.php'
        }}
        style={styles.defaultStyle}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={false}
        scalesPageToFit={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    flex:1,
    fontSize:18
  },
});

