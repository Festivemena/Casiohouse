import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Link, useNavigation } from "expo-router";
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import CustomTextInput from '../components/customTextInput'; // Assuming you have a custom input component
import Girl from '../assets/images/profile.jpg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function Profile() {
    const [currentPin, setCurrentPin] = useState("");
    const [newPin, setNewPin] = useState("");
    const [confirmNewPin, setConfirmNewPin] = useState("");
    const [errors, setErrors] = useState("");
    const navigation = useNavigation();

    const handleCurrentPin = (pin) => {
        setCurrentPin(pin);
      };
    
      const handleNewPin = (pin) => {
        setNewPin(pin);
      };
    
      const handleConfirmNewPin = (pin) => {
        setConfirmNewPin(pin);
      };

      const handleSubmit = () => {
        alert('You have successfully changed your PIN');
      }

  return (
    <View style={tw`bg-black h-full text-center pt-12 items-center `}>
     <View style={tw`flex-row w-full mx-4 `}>
      <Link href="/main" asChild>
    <Ionicons name="chevron-back" size={30} color="white" />
    </Link>
    <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>Change PIN</Text>
      </View>
    <View style={tw`mt-3`}>
        <Text style={tw`text-white`}>Your 4-digit transaction PIN secure your transactions. It is important that you do not share this PIN with anyone.</Text>
    </View>
    <CustomTextInput
        label="Current PIN"
        placeholder="Current PIN"
        value={currentPin}
        onChangeText={handleCurrentPin}
        error={errors.currentPin}
        keyboardType="numeric"
      />
        <CustomTextInput
        label="New PIN"
        placeholder="New PIN"
        value={newPin}
        onChangeText={handleNewPin}
        error={errors.newPin}
        keyboardType="numeric"
      />
        <CustomTextInput
        label="Confirm PIN"
        placeholder="Confirm New PIN"
        value={confirmNewPin}
        onChangeText={handleConfirmNewPin}
        error={errors.confirmPin}
        keyboardType="numeric"
      />
      <View style={tw`w-full items-center`}>
      <TouchableOpacity onPress={handleSubmit} style={tw`rounded-3xl w-[250px] h-[50px] mt-8 bg-[#009E06]`}>
        <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Confirm</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="hidden" />
    </View>
  );
}

