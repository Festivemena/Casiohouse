import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Legal from '../assets/images/bro.png';
import tw from 'twrnc';
import Checkbox from 'expo-checkbox';
import { Link, useNavigation } from "expo-router";

export default function App() {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (isChecked) {
      // Navigate to the "createpin" screen
      navigation.navigate('createpin');
    } else {
      // Show an alert or error message indicating that the user must accept the terms and conditions.
      // You can use any UI component or library to display the error message.
      alert('Please accept the Terms and Conditions and User Policy.');
    }
  };

  return (
    <View style={tw`bg-black h-full text-center items-center justify-center `}>
      <Text style={tw`text-white font-black -mt-24 text-[28px]`}>Legal</Text>
      <View style={tw`android:hidden `}>
        <Image source={Legal} style={tw`mt-6 h-62.5 w-62.5`} />
      </View>
      <View style={tw`ios:hidden `}>
        <Image source={Legal} style={tw`mt-6 w-60.5`} />
      </View>
      <View style={tw`flex-col w-9/10 justify-center items-center absolute bottom-0 ios:pt-16 android:pt-16`}>
        <View style={tw`flex-row w-9/10 justify-center ios:pt-16 android:pt-16`}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#009E06' : undefined}
          />
          <Text style={tw`text-white ios:text-[16px] android:text-[14px] pt-2 text-center`}>
            Do you accept our
            <Text style={tw`text-white text-center text-[#009E06] font-semibold text-[14px]`}> Terms and Conditions</Text>
            and
            <Text style={tw`text-white text-center text-[#009E06] font-semibold text-[14px]`}> User Policy</Text>?
          </Text>
        </View>
          <TouchableOpacity   onPress={handleSignUp} style={tw`rounded-3xl w-[250px] android:mb-8 ios:mb-24 h-[50px] mt-8 bg-[#009E06]`}>
            <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  checkbox: {
    margin: 8,
  },
};
