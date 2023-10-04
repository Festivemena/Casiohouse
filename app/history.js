import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, Pressable, Image, View } from 'react-native';
import tw from 'twrnc';
import Girl from '../assets/images/profile.jpg'
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function History() {
  return (
    <View style={tw`bg-black h-full pt-6 ios:pt-16 `}>
        <View style={tw`flex-row w-full mx-4 `}>
      <Link href="/main" asChild>
    <Ionicons name="chevron-back" size={30} color="white" />
    </Link>
    <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>Transaction History</Text>
    </View>
    <View style={tw`w-full pt-2 px-5`}>
    <View style={tw`bg-[#686868] rounded-[8px] py-3 w-full px-5`}>
      <View style={tw` flex-row`}>
      <Image source={Girl} style={tw`rounded-full w-10 h-10`} />
      <Text style={tw`font-bold text-[18px] text-white pl-2 pt-2`}>Stake</Text>
      </View>
      <Text style={tw`font-bold text-red-500 text-right text-[18px] -mt-7`}>-$400</Text>
    </View>
    </View>
    <View style={tw`w-full pt-2 px-5`}>
    <View style={tw`bg-[#686868] rounded-[8px] py-3 w-full px-5`}>
      <View style={tw` flex-row`}>
      <Image source={Girl} style={tw`rounded-full w-10 h-10`} />
      <Text style={tw`font-bold text-[18px] text-white pl-2 pt-2`}>Stake</Text>
      </View>
      <Text style={tw`font-bold text-[#009E06] text-right text-[18px] -mt-7`}>$400</Text>
    </View>
    </View>
    <View style={tw`w-full pt-2 px-5`}>
    <View style={tw`bg-[#686868] rounded-[8px] py-3 w-full px-5`}>
      <View style={tw` flex-row`}>
      <Image source={Girl} style={tw`rounded-full w-10 h-10`} />
      <Text style={tw`font-bold text-[18px] text-white pl-2 pt-2`}>Withdraw</Text>
      </View>
      <Text style={tw`font-bold text-[#009E06] text-right text-[18px] -mt-7`}>$400</Text>
    </View>
    </View>
    <View style={tw`w-full pt-2 px-5`}>
    <View style={tw`bg-[#686868] rounded-[8px] py-3 w-full px-5`}>
      <View style={tw` flex-row`}>
      <Image source={Girl} style={tw`rounded-full w-10 h-10`} />
      <Text style={tw`font-bold text-[18px] text-white pl-2 pt-2`}>Stake</Text>
      </View>
      <Text style={tw`font-bold text-red-500 text-right text-[18px] -mt-7`}>-$400</Text>
    </View>
    </View>
      <StatusBar style="hidden" />
    </View>
  );
}

