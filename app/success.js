import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, Pressable, Image, View } from 'react-native';
import tw from 'twrnc';
import { Link } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={tw`bg-black h-full text-center items-center justify-center `}>
        <Text style={tw`text-white font-black pb-6 text-[28px]`}>Success</Text>
        <AntDesign name="checkcircle" size={100} color="#009E06" />
        <Text style={tw`text-[12px] text-center mt-8 text-white mx-8`}>Your password has been successfully updated.</Text>
        <Link href="/login" asChild>
      <TouchableOpacity style={tw`rounded-3xl w-[250px] h-[50px] mt-10 bg-[#009E06]`}>
        <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Go back to Log In</Text>
      </TouchableOpacity>
      </Link>
      <StatusBar style="hidden" />
    </View>
  );
}

