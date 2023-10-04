import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { Link } from "expo-router";

const PinInputScreen = () => {
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(true);
  const SHOW_DELAY = 200; // Change this value to adjust the delay before masking (in milliseconds)

  const handleNumericInput = (value) => {
    if (pin.length < 4) {
      setPin(pin + value);
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  const handleClear = () => {
    setPin('');
  };

  useEffect(() => {
    // Show the full PIN for the specified delay before masking
    setShowPin(true);

    // Reset the showPin state to false (mask the PIN) after the specified delay
    const maskTimer = setTimeout(() => {
      setShowPin(false);
    }, SHOW_DELAY);

    return () => clearTimeout(maskTimer);
  }, [pin]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your PIN</Text>
      <View style={styles.pinContainer}>
        <Text style={styles.pin}>{showPin ? pin : Array(pin.length + 1).join('*')}</Text>
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
          <KeypadButton onPress={handleClear} label="Clear" customStyle={styles.clearButton} />
          <KeypadButton onPress={() => handleNumericInput('0')} label="0" />
          <KeypadButton onPress={handleBackspace} label="⌫" customStyle={styles.backspaceButton} />
        </View>
      </View>
      <View style={tw`w-full items-center`}>
      <Link href="/login" asChild>
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

export default PinInputScreen;
