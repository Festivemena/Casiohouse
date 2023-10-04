import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Link } from "expo-router";
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import useFplStore from '../store/useFplStore'
import { TextInput } from 'react-native-gesture-handler';
import { TextPath } from 'react-native-svg';

export default function App() {
    const {managerName, setManagerName} = useFplStore();
  return (
    <View style={tw`bg-black ios:pt-18 android:pt-6 h-full `}>
      <View style={tw`flex-row w-full mx-4 `}>
        <Link href="/main" asChild>
      <Ionicons name="chevron-back" size={30} color="white" />
      </Link>
      <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>FPL - Sign Up</Text>
      </View>
      <View style={tw`w-full items-center pt-4 justify-center`}>
        <Text style={tw`text-white text-left w-full px-6`}>Please enter your Manager ID:</Text>
        <TextInput style={tw`text-white border-[#009E06] mt-2 border-[1px] px-2 h-[40px] w-9/10 rounded-lg `}
         onChangeText={setManagerName}
         placeholder="Enter your Manager ID..."
         value={managerName}
         placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity>
        <Text style={tw`text-white text-[14px] pt-4`}>Don't know how to get your manger ID? <Text style={tw`text-[#009E06] text-[14px]`}>Click here...</Text></Text>
        </TouchableOpacity>
        <Link href="/joc" asChild>
        <TouchableOpacity>
        <View style={tw`bg-[#009E06] w-[170px] mt-6 text-center h-10 rounded-[14px]`}>
                <Text style={tw`text-white text-center pt-[5px] font-bold text-lg`}>Sign Up</Text>
            </View>
        </TouchableOpacity>
        </Link>
      </View>
      <StatusBar style="hidden" />
    </View>
  );
}

