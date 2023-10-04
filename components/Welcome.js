import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, Pressable, Image, View } from 'react-native';
import Pana from '../assets/images/pana.png'
import tw from 'twrnc';
import { Link } from "expo-router";
import React, { useEffect } from 'react';
import useAuthStore from '../store/useAuthStore';

export default function Welcome() {
  const {userName} = useAuthStore();
  
  return (
    <View style={tw`bg-black h-full text-center items-center justify-center `}>
      <Image source={Pana} width={250} height={250} style={tw``} />
      <Link href="/signup" asChild>
      <TouchableOpacity style={tw`rounded-lg w-[220px] h-[50px] mt-20 bg-[#009E06]`}>
        <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Sign Up</Text>
      </TouchableOpacity>
      </Link>
      <Link href="/login" asChild>
        <TouchableOpacity>
      <Text style={tw`text-white mt-3 font-semibold text-[14px]`}>Log in to an Existing Account?</Text>
      </TouchableOpacity>
      </Link>
      <StatusBar style="hidden" />
    </View>
  );
}

