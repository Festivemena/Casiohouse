import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, ScrollView, Modal, TouchableOpacity, Image, View } from 'react-native';
import { Link, useRouter } from "expo-router";
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
     const [stake, setStake] = useState("");
     const [modalVisible, setModalVisible] = useState(false);
     const router = useRouter();

  const handleSubmit = () => {
    setModalVisible(!modalVisible);
    
  };

  const handleOkay = () => {
    setModalVisible(false);
    router.push('fplhome');
    
  };

  return (
    <View style={tw`bg-black ios:pt-18 items-center android:pt-6 h-full `}>
      <View style={tw`flex-row w-full mx-4 `}>
        <Link href="/fplhome" asChild>
      <Ionicons name="chevron-back" size={30} color="white" />
      </Link>
      <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>Random Head 2 Head</Text>
      </View>
      <View>
        <Text style={tw`text-[#009E06] text-[16px] font-semibold pl-4 ios:pt-2 android:pt-1`}>Rules of Random Head 2 Head</Text>
        <View style={tw`ios:w-9/10  flex-row`}>
            <Text style={tw`text-white ios:text-[16px] pl-4 android:text-[13px] text-left pt-1`}>1. You are randomly paired with any user that opts to be play Random H2H</Text>
        </View>
        <View style={tw`ios:w-9/10 flex-row`}>
            <Text style={tw`text-white ios:text-[16px] pl-4 android:text-[13px] text-left pt-1`}>2. Stake Amount does not determine the user you will be paired with</Text>
        </View>
        <View style={tw`ios:w-9/10 flex-row`}>
            <Text style={tw`text-white ios:text-[16px] pl-4 android:text-[13px] text-left pt-1`}>3. Stake from $500 above received added point value to their FPL point based on amount staked as an added boost.</Text>
        </View>
        <View style={tw`ios:w-9/10 flex-row`}>
            <Text style={tw`text-white ios:text-[16px] pl-4 android:text-[13px] text-left pt-3`}>Note: This boost isn't added to your Official FPL score only for the specific Gameweek's Random H2H...</Text>
        </View>
      </View>
      <View style={tw`mt-4 w-full px-8 text-white`}>
        <Text style={tw`text-white mb-1`}>Enter Amount:</Text>
        <TextInput style={tw`text-white border-[#009E06] border-[1px] px-2 h-[38px] w-full rounded-lg `}
         onChangeText={setStake}
         value={stake}
         placeholder="Enter Amount..."
         keyboardType="numeric"
         placeholderTextColor="#A9A9A9"
        />
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
          
        <AntDesign name="checkcircle" style={tw`pt-8`} size={80} color="#009E06" />
        <Text style={tw`text-black font-black pt-4 text-[28px]`}>Successful</Text>
            <TouchableOpacity onPress={handleOkay} style={tw`bg-[#009E06] mt-8 px-4 py-2 rounded`}>
              <Text style={tw`font-bold text-[18px] text-white`}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={handleSubmit} style={tw`rounded-3xl w-2/3 mx-10 h-[50px] mt-8 bg-[#009E06]`}>
        <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Confirm</Text>
      </TouchableOpacity>
      <StatusBar style="hidden" />
    </View>
  );
}

