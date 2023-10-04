import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { Link } from "expo-router";
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const WithdrawScreen = () => {
  const [amount, setAmount] = useState();
  const [email, setEmail] = useState("");

  const handleNumericInput = (num) => {
    // Handle decimal point input
    if (num === '.' && amount.toString().includes('.')) {
      return; // Allow only one decimal point in the amount
    }

    // Convert the current amount to a number for comparison
    const currentAmount = parseFloat(amount);

    // Append the pressed numeric button or decimal point to the current amount
    setAmount((prevAmount) => {
      const newAmount = prevAmount + num;
      // Update the amount only if the new amount is greater than 0
      return parseFloat(newAmount) > 0 ? newAmount : 0;
    });
  };

  const handleClear = () => {
    setAmount(''); // Clear the entered amount
  };

  const handleBackspace = () => {
    if (amount.length > 0) {
      setAmount((prevAmount) => prevAmount.slice(0, -1)); // Remove the last digit from the amount
    }
  };

  return (
    <View style={styles.container}>
       <View style={tw`flex-row w-full -mt-16 mx-4 `}>
        <Link href="/main" asChild>
      <Ionicons name="chevron-back" size={30} color="white" />
      </Link>
      <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>Withdraw</Text>
      </View>
      <Text style={styles.title}>Enter Amount</Text>
      <View style={styles.pinContainer}>
      <Text style={styles.pin}>${amount}</Text>
      </View>
      <View style={tw`w-9/10`}>
      <TextInput style={tw`text-white border-[#009E06] border-[1px] px-2 h-[38px] w-full rounded-lg `}
         onChangeText={setEmail}
         value={email}
         placeholderTextColor="#A9A9A9"
         placeholder='Enter Wallet Address'
        />
        </View>
      <View style={styles.keypadContainer}>
      <View style={styles.row}>
          <KeypadButton onPress={() => handleNumericInput('1')} label="1" />
          <KeypadButton onPress={() => handleNumericInput('2')} label="2" />
          <KeypadButton onPress={() => handleNumericInput('3')} label="3" />
        </View>
        <View style={styles.row}>
          <KeypadButton onPress={() => handleNumericInput('4')} label="4" />
          <KeypadButton onPress={() => handleNumericInput('5')} label="5" />
          <KeypadButton onPress={() => handleNumericInput('6')} label="6" />
        </View>
        <View style={styles.row}>
          <KeypadButton onPress={() => handleNumericInput('7')} label="7" />
          <KeypadButton onPress={() => handleNumericInput('8')} label="8" />
          <KeypadButton onPress={() => handleNumericInput('9')} label="9" />
        </View>
        <View style={styles.row}>
          {/* New KeypadButton for decimal point */}
          <KeypadButton onPress={() => handleNumericInput('.')} label="." />
          <KeypadButton onPress={() => handleNumericInput('0')} label="0" />
          <KeypadButton onPress={handleBackspace} label="⌫" customStyle={styles.backspaceButton} />
        </View>
        <View style={styles.row}>
          <KeypadButton onPress={handleClear} label="Clear" customStyle={styles.clearButton} />
          {/* Additional column for the Enter button */}
          {/* <TouchableOpacity style={[styles.keypadButton, styles.enterButton]} onPress={() => {}}>
            <Text style={styles.keypadButtonText}>Enter</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={tw`w-full items-center`}>
      <Link href="/enterpin" asChild>
      <TouchableOpacity style={tw`rounded-3xl w-[250px] h-[50px] mt-8 bg-[#009E06]`}>
        <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Confirm</Text>
      </TouchableOpacity>
      </Link>
      </View>
    </View>
  );
};

const KeypadButton = ({ onPress, label, customStyle }) => (
  <TouchableOpacity style={[styles.keypadButton, tw`text-white`, customStyle]} onPress={onPress}>
    <Text style={styles.keypadButtonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  pin: {
    fontSize: 28,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // borderWidth: 2,
    // borderRadius: 8,
    borderColor: '#333',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  keypadContainer: {
    width: '80%',
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    color: 'white',
  },
  keypadButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 8,
    height: 60,
  },
  keypadButtonText: {
    fontSize: 24,
    color: 'white',
  },
  clearButton: {
    backgroundColor: '#000000',
  },
  backspaceButton: {
    backgroundColor: '#000000',
  },
});

export default WithdrawScreen;
