import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Link, useNavigation } from "expo-router";
import { useState } from 'react';
import tw from 'twrnc';
import CustomTextInput from '../components/customTextInput'; // Assuming you have a custom input component
import { TextInput } from 'react-native-gesture-handler';
import useAuthStore from '../store/useAuthStore';

export default function App() {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassWord, setLoginPassWord] = useState("");
  
  const {
    userName,
    passWord,
    errors,
    setUserName,
    setPassWord,
    setErrors,
  } = useAuthStore();
  const navigation = useNavigation();

  const handleUserNameChange = (text) => {
    setLoginUserName(text);
  };

  const handlePasswordChange = (text) => {
    setLoginPassWord(text);
  };

  const handleLogin = () => {
    setErrors(""); // Clear any previous error message

    if (!loginUserName.trim()) {
      setErrors("Please enter your Username.");
      return;
    }

    if (!loginPassWord.trim()) {
      setErrors("Please enter your Password.");
      return;
    }

    // const hardcodedUserName = "user123";
    // const hardcodedPassword = "password123";

    if (loginUserName !== userName || loginPassWord !== passWord) {
      setErrors("Invalid username or password.");
      return;
    }

    // If authentication is successful, set the Zustand state variables
    setUserName(loginUserName);
    setPassWord(loginPassWord);

    // Navigate to the "main" screen
    navigation.navigate('main');
  };

  return (
    <View style={tw`bg-black h-full text-center items-center justify-center `}>
      <Text style={tw`text-white font-black pt-[92px] text-[28px]`}>Login</Text>
      <Text style={tw`text-[12px] text-center mt-2 text-white mx-8`}>Welcome Back to the Crypto Arcade: Level Up your game with digital Gold!</Text>
      <CustomTextInput
        label="Username or Email"
        placeholder="Enter Username or Email"
        value={loginUserName}
        onChangeText={handleUserNameChange}
        error={errors.userName}
      />
      <CustomTextInput
        label="Password"
        placeholder="Password"
        value={loginPassWord}
        onChangeText={handlePasswordChange}
        error={errors.passWord}
        secureTextEntry
      />
      {errors ? <Text style={tw`text-red-500 mt-2`}>{errors}</Text> : null}
      <Link href="/forgot" asChild>
        <TouchableOpacity style={tw`w-full`}>
          <Text style={tw`w-full text-right text-[#009E06] pr-8 pt-2`}>Forgot password?</Text>
        </TouchableOpacity>
      </Link>
      {/* <Link href="/main" asChild> */}
        <TouchableOpacity style={tw`rounded-3xl w-[250px] h-[50px] mt-12 bg-[#009E06]`} onPress={handleLogin}>
          <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Login</Text>
        </TouchableOpacity>
      {/* </Link> */}
      <Link href="/signup" asChild>
        <TouchableOpacity style={tw` w-[250px] mt-20 `}>
          <Text style={tw`text-white mt-8 text-center font-semibold text-[#009E06] text-[12px]`}>Create an Account?<Text style={tw`text-white text-center font-semibold text-[12px]`}> Sign Up</Text></Text>
        </TouchableOpacity>
      </Link>
      <StatusBar style="hidden" />
    </View>
  );
}
