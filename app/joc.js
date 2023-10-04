import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, CheckBox, TouchableOpacity, Image, View } from 'react-native';
import { Link } from "expo-router";
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
    const [userName, setUserName] = useState("");
    const [teamName, setTeamName] = useState("");
   
  return (
    <View style={tw`bg-black ios:pt-18 android:pt-6 h-full `}>
    <View style={tw`flex-row w-full mx-4 `}>
      <Link href="/main" asChild>
    <Ionicons name="chevron-back" size={30} color="white" />
    </Link>
    <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>Fantasy Premier League</Text>
    </View>
      <View style={tw`w-full items-center android:px-10 ios:px-12 flex-row justify-between`}>
        <Link href="/jlprivate" asChild>
        <TouchableOpacity>
            <View style={tw`bg-[#009E06] w-[125px] mt-6 text-center items-center justify-center h-28 rounded-[14px]`}>
            <AntDesign name="adduser" size={52} color="white" />
            </View>
            <Text style={tw`text-white text-[12px] pt-2 text-center`}>JOIN LEAGUE</Text>
        </TouchableOpacity>
        </Link>
        <Link href="/clprivate" asChild>
        <TouchableOpacity>
            <View style={tw`bg-[#009E06] w-[125px] mt-6 text-center items-center justify-center h-28 rounded-[14px]`}>
            <Feather name="edit" size={52} color="white" />
            </View>
            <Text style={tw`text-white text-[12px] pt-2 text-center`}>CREATE LEAGUE</Text>
        </TouchableOpacity>
        </Link>
      </View>
      <StatusBar style="hidden" />
    </View>
  );
}

