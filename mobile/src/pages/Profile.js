import React from 'react';
import WebView from "react-native-webview";
import { View } from 'react-native';

// import { Container } from './styles';

export default function Profile({ navigation }) {
  const githubUsername = navigation.getParam('github_username');

  return (
    <WebView 
      style={{ flex: 1 }} 
      source={{ uri: `http://github.com/${githubUsername}`}}
    />
  );
}
