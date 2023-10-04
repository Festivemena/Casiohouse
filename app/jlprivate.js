import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Modal, TouchableOpacity, Image, View } from 'react-native';
import { Link, useRouter } from "expo-router";
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
    const [teamName, setTeamName] = useState("");
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
        <View style={tw`flex-row`}>
            <View style={tw`w-5 h-5 rounded-full bg-[#009E06]`}></View>
            <Text style={tw`text-white font-bold pl-4`}>PRIVATE</Text>
        </View>
        <Link href="/jlpublic" asChild>
        <TouchableOpacity>
        <View style={tw`flex-row`}>
            <View style={tw`w-5 h-5 rounded-full bg-black border-2 border-[#009E06]`}></View>
            <Text style={tw`text-white font-bold pl-4`}>PUBLIC</Text>
        </View>
        </TouchableOpacity>
        </Link>
      </View>
      <View style={tw`w-full items-center pt-4 justify-center`}>
        <Text style={tw`text-white text-left w-full px-6`}>Please enter the League Name:</Text>
        <TextInput style={tw`text-white border-[#009E06] mt-2 border-[1px] px-2 h-[40px] w-9/10 rounded-lg `}
         onChangeText={setTeamName}
         placeholder="Enter your Team Name..."
         value={teamName}
         placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity onPress={handleSubmit}>
            <View style={tw`bg-[#009E06] w-[170px] mt-6 text-center h-10 rounded-[14px]`}>
                <Text style={tw`text-white text-center pt-[5px] font-bold text-lg`}>Join League</Text>
            </View>
        </TouchableOpacity>
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
      </View>
      <StatusBar style="hidden" />
    </View>
  );
}

