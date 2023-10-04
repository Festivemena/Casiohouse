import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Modal, Image, View, ScrollView } from 'react-native';
import { Link, useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const PLeague = [
    {
        "id": 1,
        "league": "CPE Hawks",
        "join": "Join",
      },
      {
        "id": 2,
        "league": "MTE Raptors",
        "join": "Join",
      },
      {
        "id": 3,
        "league": "EEE Circuits",
        "join": "Join",
      },
]

export default function App({}) {
    const [teamName, setTeamName] = useState("");
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();

 const handleSubmit = () => {
   setModalVisible(!modalVisible);
   
 };

 const handleOkay = () => {
  setModalVisible(false);
   router.push('fplleague');
   
 };

 const closeModalWithTimeout = () => {
  setTimeout(() => {
    handleOkay();
  }, 1); // Adjust the timeout value (in milliseconds) as needed
};

  return (
    <View style={tw`bg-black ios:pt-18 android:pt-6 h-full `}>
      <View style={tw`flex-row w-full mx-4 `}>
        <Link href="/main" asChild>
      <Ionicons name="chevron-back" size={30} color="white" />
      </Link>
      <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>FPL - Join League</Text>
      </View>
      <View style={tw`w-full flex-row justify-between px-18 pt-4 text-center items-center`}>
      <Link href="/jlprivate" asChild>
        <TouchableOpacity>
        <View style={tw`flex-row`}>
        <View style={tw`w-5 h-5 rounded-full bg-black border-2 border-[#009E06]`}></View>
            <Text style={tw`text-white font-bold pl-4`}>PRIVATE</Text>
        </View>
        </TouchableOpacity>
        </Link>
        <View style={tw`flex-row`}>
        <View style={tw`w-5 h-5 rounded-full bg-[#009E06]`}></View>
            <Text style={tw`text-white font-bold pl-4`}>PUBLIC</Text>
        </View>
      </View>
      <ScrollView style={tw`w-full pt-4 `}>
      <View style={tw` mt-1 w-full justify-between flex-row`} >
         <View style={tw`flex-row`}>
         <MaterialIcons style={tw`mr-2 ml-4`} name="verified" size={20} color="#009E06" />
        <Text style={tw`text-white  font-bold text-[16px] text-left`}>Casiohouse</Text>
        </View>
        <TouchableOpacity onPress={handleSubmit} style={tw`flex-row` }>
        <Text style={tw`text-[#009E06] text-[16px] pr-8 text-right`}>Join</Text>
        </TouchableOpacity>
        </View>
       <Modal
        animationType="slide" // or "fade", "none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white w-2/3 text-center justify-center items-center p-4 rounded-xl`}>
            <Text style={tw`font-bold text-[20px] `}>League Rules</Text>
            <Text style={tw`text-[9px] `}>12,344 members</Text>
             <Text style={tw`text-[13px] pt-2 text-center `}>Here's the stake breakdown for the League, which includes both weekly and season stakes:</Text>
             <View style={tw`w-full flex-row justify-between`}>
              <Text style={tw`font-black`}>Weekly Stake:</Text>
              <Text style={tw`text-[#009E06] font-semibold`}>($10)</Text>
              <Text style={tw`text-[#009E06] font-semibold`}>$380</Text>
             </View>
             <View style={tw`w-full flex-row -mt-1 justify-between`}>
              <Text style={tw` text-[10px] text-[#009E06]`}>38 Weeks Remaining</Text>
             </View>
             <View style={tw`w-full flex-row pt-2 justify-between`}>
              <Text style={tw`font-black`}>Season Stake:</Text>
              <Text style={tw`text-[#009E06] font-semibold`}>$100</Text>
             </View>
             <View style={tw`w-full`}>
              <Text style={tw`text-center text-[16px] pt-3 font-bold`}>Total Stake</Text>
             </View>
             <View style={tw`w-full`}>
              <Text style={tw`text-center text-[16px] text-[#009E06] mt-[2px] font-black`}>$480</Text>
             </View>
             <TouchableOpacity onPress={closeModalWithTimeout} style={tw`rounded-3xl w-2/3 mx-10 h-[50px] mt-4 bg-[#009E06]`}>
        <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit}>
      <View  style={tw`mt-6`}>
        <Text style={tw`text-[16px] font-semibold`}>Cancel</Text>
      </View>
      </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <View style={tw`h-full w-full`}>
      {PLeague.map((item) => (
        <View key={item.id} style={tw`w-full mt-1.5 `}>
        <View style={tw` mt-2.5 w-full justify-between flex-row`} >
         <View style={tw`flex-row`}>
         <View style={tw`w-3 ml-4 h-3 rounded-full mr-4 bg-[#009E06]`}></View>
        <Text style={tw`text-white  font-bold text-[16px] text-left`}>{item.league}</Text>
        </View>
        <TouchableOpacity onPress={handleSubmit} style={tw`flex-row` }>
        <Text style={tw`text-[#009E06] text-[16px] pr-8 text-right`}>{item.join}</Text>
        </TouchableOpacity>
        </View>
        </View>
      ))}
      </View>
      </ScrollView>
      <StatusBar style="hidden" />
    </View>
  );
}

