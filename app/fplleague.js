import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Modal, Image, View } from 'react-native';
import { Link } from "expo-router";
import { useState, useRef } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const PLeague = [
  {
    "id": 1,
    "league": "Innovator FC",
    "score": "572",
  },
  {
    "id": 2,
    "league": "Anelson Builds",
    "score": "572",
  },
  {
    "id": 3,
    "league": "Top Gun FC",
    "score": "572",
  },
  {
    "id": 4,
    "league": "Innovator FC",
    "score": "572",
  },
  {
    "id": 5,
    "league": "Anelson Builds",
    "score": "572",
  },
  {
    "id": 6,
    "league": "Top Gun FC",
    "score": "572",
  },
]

const options = [
  { "label": '1', "id": 1, "value": '1' },
  { "label": '2', "id": 2, "value": '2' },
  { "label": '3', "id": 3, "value": '3' },
  { "label": '4', "id": 4, "value": '4' },
  { "label": '5', "id": 5, "value": '5' },
  { "label": '6', "id": 6, "value": '6' },
  { "label": '1', "id": 7, "value": '1' },
  { "label": '2', "id": 8, "value": '2' },
  { "label": '3', "id": 9, "value": '3' },
  { "label": '4', "id": 10, "value": '4' },
  { "label": '5', "id": 11, "value": '5' },
  { "label": '12', "id": 12, "value": '12' },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionPress = (item) => {
    setSelectedOption(item.id);
  };
  
  return (
    <View style={tw`bg-black w-full ios:pt-18 android:pt-6 h-full `}>
      <View style={tw`flex-row w-full mx-4 `}>
        <Link href="/fplhome" asChild>
      <Ionicons name="chevron-back" size={30} color="white" />
      </Link>
      <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>MTE Raptors</Text>
      </View>
      <View style={tw`flex-row justify-between px-4 w-full`}>
      <View style={tw`w-1/3 flex-row pt-2`}>
        <Text style={tw`text-white text-[15px] font-semibold`}>You are no:</Text>
        <Text style={tw`text-[#009E06] pl-1 font-bold text-[15px]`}>12</Text>
      </View>
      <View style={tw` flex-row pt-2`}>
        <Text style={tw`text-white text-[15px] font-semibold`}>ID:</Text>
        <Text style={tw`text-[#009E06] pl-1 font-bold text-[15px]`}>28394718893037</Text>
      </View>
      </View>
      <View style={tw`w-full flex-row justify-between px-18 pt-4 text-center items-center`}>
        <TouchableOpacity>
        <View style={tw`flex-row`}>
        <View style={tw`w-5 h-5 rounded-full bg-[#009E06]`}></View>
            <Text style={tw`text-white font-bold pl-4`}>Week</Text>
        </View>
        </TouchableOpacity>
        <Link href="/fseason" asChild>
          <TouchableOpacity>
        <View style={tw`flex-row`}>
        <View style={tw`w-5 h-5 rounded-full bg-black border-2 border-[#009E06]`}></View>
            <Text style={tw`text-white font-bold pl-4`}>Season</Text>
        </View>
        </TouchableOpacity>
        </Link>
      </View>
      <View style={tw`ios:hidden`}>
      <ScrollView style={tw`w-full pt-2 pb-2`} horizontal={true}>
        {options.map((item) => (
        <View style={[
          tw`mx-5 w-10 h-10 rounded-full py-2`,
          selectedOption === item.id ? { backgroundColor: '#009E06' } : null,
        ]}
        onTouchEnd={() => handleOptionPress(item)} key={item.id}>
            <Text style={tw`text-[18px] text-center font-bold text-white`}>{item.label}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
      <View style={tw`android:hidden`}>
      <ScrollView style={tw`w-full pt-2 pb-2`} horizontal={true}>
        {options.map((item) => (
        <View style={[
          tw`mx-5 w-10 h-10 rounded-full py-2`,
          selectedOption === item.id ? { backgroundColor: '#009E06' } : null,
        ]}
        onTouchEnd={() => handleOptionPress(item)} key={item.id}>
            <Text style={tw`text-[18px] text-center font-bold text-white`}>{item.label}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
      <ScrollView style={tw``}>
        <View style={tw`h-full w-full`}>
      {PLeague.map((item) => (
        <View key={item.id} style={tw`w-full mt-1.5 `}>
        <View style={tw` w-full justify-between flex-row`} >
         <View style={tw`flex-row pl-3`}>
         <Text style={tw`text-white font-bold text-[16px] text-left`}>{item.id}.</Text>
        <Text style={tw`text-white pl-1 font-bold text-[16px] text-left`}>{item.league}</Text>
        </View>
        <Link href="/fplhome" asChild>
        <TouchableOpacity style={tw`flex-row` }>
        <Text style={tw`text-[#009E06] text-[16px] font-bold pr-8 text-right`}>{item.score}</Text>
        </TouchableOpacity>
        </Link>
        </View>
        </View>
      ))}
      </View>
      </ScrollView>
      <StatusBar style="hidden" />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    height: 1, // Set the desired height here
  },
});