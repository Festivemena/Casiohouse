import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, Pressable, Image, View } from 'react-native';
import Pana from '../assets/images/pana.png'
import tw from 'twrnc';
import { Link } from "expo-router";
import React, { useEffect } from 'react';
import useAuthStore from '../store/useAuthStore';
import Main from '../components/Main'
import Welcome from '../components/Welcome'

export default function App() {
  const {userName} = useAuthStore();
  
  return (
    <View style={tw` `}>
     {userName ? (
        <Main />
      ) : (
        <Welcome />
      )}
      <StatusBar style="hidden" />
    </View>
  );
}

