import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Link } from "expo-router";
import { useState } from 'react';
import tw from 'twrnc';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
  return (
    <View style={tw`bg-black h-full text-center items-center justify-center `}>
      <Text style={tw`text-white font-black pt-[92px] text-[28px]`}>Forgot Password?</Text>
      <Text style={tw`text-[12px] text-center mt-1 text-white mx-8`}>No worries, we’ll help you reset instructions.</Text>
      <View style={tw`mt-4 w-full px-8 text-white`}>
        <Text style={tw`text-white mb-1`}>Email:</Text>
        <TextInput style={tw`text-white border-[#009E06] border-[1px] px-2 h-[38px] w-full rounded-lg `}
         onChangeText={setUserName}
         value={userName}
         placeholder="Email:"
        />
      </View>
      <Link href="/otp" asChild>
      <TouchableOpacity style={tw`rounded-3xl w-[250px] h-[50px] mt-12 bg-[#009E06]`}>
        <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Reset</Text>
      </TouchableOpacity>
      </Link>
      <Link href="/login" asChild>
      <TouchableOpacity style={tw` w-[250px] mt-20 `}>
      <Text style={tw`text-white mt-8 text-center font-semibold text-[#009E06] text-[12px]`}>Already have an Account?<Text style={tw`text-white text-center font-semibold text-[12px]`}> Log In</Text></Text>
      </TouchableOpacity>
      </Link>
      <StatusBar style="hidden" />
    </View>
  );
}

