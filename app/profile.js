import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Link, useRouter } from "expo-router";
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import Girl from '../assets/images/profile.jpg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

export default function Profile() {
    const [userName, setUserName] = useState("");
    const [image, setImage] = useState(null);
    const router = useRouter();

    const save = async () => {
      alert('Your details have been updated successfully');
      // router.push('main')
    }

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    
      console.log(result);
    
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

  return (
    <View style={tw`bg-black h-full text-center pt-12 items-center `}>
     <View style={tw`flex-row w-full mx-4 `}>
      <Link href="/main" asChild>
    <Ionicons name="chevron-back" size={30} color="white" />
    </Link>
      </View>
      <TouchableOpacity onPress={pickImage}>
    <View style={tw`w-full items-center pt-18 justify-center`}>
      {image ?  <Image source={{ uri: image }} style={{ width: 180, borderRadius:100, height: 180 }} /> : <Image style={tw`rounded-full w-[180px] h-[180px]`} source={Girl} />}
    <MaterialCommunityIcons name="camera-plus-outline" style={tw`pt-18 absolute`} size={48} color="white" />
    </View>
    </TouchableOpacity>
    <View style={tw`w-9/10 pt-6`}>
    <TextInput style={tw`text-white border-[#009E06] text-center border-b-[1px] px-2 h-[38px] w-full rounded-lg `}
         onChangeText={setUserName}
         value={userName}
         placeholder='New Tag Name'
         placeholderTextColor="#A9A9A9"
        />
    </View>
    <TouchableOpacity onPress={save} style={tw`rounded-3xl w-[250px] h-[50px] mt-24 bg-[#009E06]`}>
        <Text style={tw`text-center w-full text-white mt-3 font-bold text-[18px]`}>Save</Text>
      </TouchableOpacity>
      <StatusBar style="hidden" />
    </View>
  );
}

