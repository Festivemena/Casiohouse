import React from 'react';
import { View, Text, TextInput } from 'react-native';
import tw from 'twrnc';

const CustomTextInput = ({ label, placeholder, value, onChangeText, error, secureTextEntry = false, keyboardType = 'default' }) => {
  return (
    <View style={tw`mt-3 w-full px-8 text-white`}>
      <Text style={tw`text-white mb-1`}>{label}:</Text>
      <TextInput
        style={tw`text-white border-[#009E06] border-[1px] px-2 h-[38px] w-full rounded-lg `}
        placeholderTextColor="#A9A9A9"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      {error ? <Text style={tw`text-red-500 mt-1`}>{error}</Text> : null}
    </View>
  );
};

export default CustomTextInput;
