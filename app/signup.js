import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Link, useNavigation } from "expo-router";
import CustomTextInput from '../components/customTextInput';
import { TextInput } from 'react-native-gesture-handler';
import useSignUpStore from '../store/useAuthStore';

export default function App() {
  const {
    userName,
    fullName,
    email,
    passWord,
    confirm,
    errors,
    setUserName,
    setFullName,
    setEmail,
    setPassWord,
    setConfirm,
    setErrors,
  } = useSignUpStore();

  const navigation = useNavigation();

  const handleSignUp = () => {
    setErrors(""); // Clear any previous error message

    if (!userName.trim()) {
      setErrors("Please enter your Username.");
      return;
    }

    if (!fullName.trim()) {
      setErrors("Please enter your Full Name.");
      return;
    }

    if (!email.trim()) {
      setErrors("Please enter your Email.");
      return;
    }

    if (!passWord.trim()) {
      setErrors("Please enter your Password.");
      return;
    }

    if (passWord !== confirm) {
      setErrors("Passwords do not match.");
      return;
    }

    // Logic to handle sign-up
    // You can access the 'userName', 'fullName', 'email', 'passWord', and 'confirm' states here

    // For this example, we'll assume the sign-up is successful and navigate to the "main" screen
    navigation.navigate('toc');
  };

  const isValidEmail = (email) => {
    // Simple email validation function, you can use a more sophisticated one
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={tw`bg-black h-full text-center items-center justify-center pt-6`}>
      <Text style={tw`text-white font-black pt-[92px] text-[28px] mb-2`}>Sign Up</Text>
      <Text style={tw`text-white text-[12px] mb-8`}>Enter the Crypto Arcade: Where game meets Digital Gold!</Text>

      <CustomTextInput
        label="Username"
        placeholder="Create Username"
        value={userName}
        onChangeText={setUserName}
        error={errors.userName}
      />

      <CustomTextInput
        label="Full Name"
        placeholder="Enter your Full Name"
        value={fullName}
        onChangeText={setFullName}
        error={errors.fullName}
      />

      <CustomTextInput
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        error={errors.email}
        keyboardType="email-address"
      />

      <CustomTextInput
        label="Password"
        placeholder="Password"
        value={passWord}
        onChangeText={setPassWord}
        error={errors.passWord}
        secureTextEntry
      />

      <CustomTextInput
        label="Confirm Password"
        placeholder="Confirm Password"
        value={confirm}
        onChangeText={setConfirm}
        error={errors.confirm}
        secureTextEntry
      />

      {/* Error message */}
      <View style={tw`w-full flex-row text-center`}>
        {Object.values(errors).map((error, index) => (
          <Text key={index} style={tw`text-red-500 w-full mt-2`}>
            {error}
          </Text>
        ))}
      </View>

      <TouchableOpacity onPress={handleSignUp} style={tw`rounded-3xl w-[250px] h-[50px] mt-8 bg-[#009E06]`}>
        <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Sign Up</Text>
      </TouchableOpacity>
      <Link href="/login" asChild>
        <TouchableOpacity style={tw` w-[250px] mt-8 mb-2`}>
          <Text style={tw`text-white mt-12 text-center font-semibold text-[#009E06] text-[12px]`}>Already have an Account?<Text style={tw`text-white text-center font-semibold text-[12px]`}> Login</Text></Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
