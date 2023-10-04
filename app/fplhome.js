import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, View } from 'react-native';
import { Link, useRouter } from "expo-router";
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons, MaterialIcons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import useFplStore from '../store/useFplStore';

const PLeague = [
    {
        "id": 1,
        "league": "CPE Hawks",
      },
      {
        "id": 2,
        "league": "MTE Raptors",
      },
      {
        "id": 3,
        "league": "EEE Circuits",
      },
]

export default function App({ route }) {
  const {managerName, setManagerName} = useFplStore();
  const router = useRouter();

  const handleJoin = () => {
    router.push('jlone');
    
  };

  const handleCreate = () => {
    router.push('clone');
    
  };

  return (
    <View style={tw`bg-black items-center text-center ios:pt-18 android:pt-6 h-full `}>
    <View style={tw`flex-row w-full mx-4 `}>
      <Link href="/main" asChild>
    <Ionicons name="chevron-back" size={30} color="white" />
    </Link>
    <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>FPL HOME PAGE</Text>
    </View>
      <View style={tw`w-full flex-row justify-between px-12 pt-2`}>
      <View style={tw`flex-row`}>
        <Text style={tw`text-[#009E06] font-bold -mt-[2px] text-[20px]`}>{managerName}</Text>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`text-white text-[16px]`}>Point:</Text>
        <Text style={tw`text-white text-[16px] font-bold pl-2 text-[#009E06]`}>115</Text>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`text-white text-[16px]`}>Season:</Text>
        <Text style={tw`text-white font-bold text-[16px] pl-2 text-[#009E06]`}>1512</Text>
      </View>
      </View>
        <View style={tw`justify-between mt-3 flex-row w-full px-6`}>
            <Text style={tw`text-white pl-6 pt-2 font-bold text-[16px]`}>League</Text>
            <View style={tw``}>
             <Link href="/randomh" asChild>
            <TouchableOpacity>
                <View style={tw`bg-[#009E06] rounded-lg px-2 py-2`}>
                    <Text style={tw`text-white font-bold`}>Random H2H</Text>
                </View>
            </TouchableOpacity>
            </Link>
            </View>
      </View>
      <ScrollView style={tw`w-full pt-4`}>
      <View style={tw` mt-1 w-full justify-between flex-row`} >
         <View style={tw`flex-row`}>
         <MaterialIcons style={tw`mr-2 ml-4`} name="verified" size={20} color="#009E06" />
        <Text style={tw`text-white  font-bold text-[16px] text-left`}>Casiohouse</Text>
        </View>
        <Link href="/fplleague" asChild>
        <TouchableOpacity style={tw`flex-row` }>
        <Text style={tw`text-[#009E06] text-[16px] pr-8 text-right`}>Join</Text>
        </TouchableOpacity>
        </Link>
        </View>
        <View style={tw`h-full w-full`}>
      {PLeague.map((item) => (
       <Link key={item.id} href={{
        pathname: "/fplleague",
      }} asChild>
        <TouchableOpacity style={tw`flex-row` }>
        <View style={tw`w-full mt-1.5 `}>
        <View style={tw` mt-2.5 w-full justify-between flex-row`} >
         <View style={tw`flex-row`}>
         <View style={tw`w-3 ml-4 h-3 android:mt-1.5 rounded-full mr-4 bg-[#009E06]`}></View>
        <Text style={tw`text-white  font-bold text-[16px] text-left`}>{item.league}</Text>
        </View>
        <Text style={tw`text-[#009E06] text-[16px] pr-8 text-right`}>{item.join}</Text>
        </View>
        </View>
        </TouchableOpacity>
        </Link>
      ))}
      </View>
      </ScrollView>
      <View style={tw`bottom-0 w-full items-center android:hidden ios:mt-18`}>
      <View style={styles.bottomView}>
      <View style={tw`flex-row justify-between mx-14 mt-2`}>
       <TouchableOpacity onPress={handleJoin} >
       <AntDesign name="adduser" size={36} color="#009E06" />
       </TouchableOpacity>
       <TouchableOpacity onPress={handleCreate} >
       <Feather name="edit" size={36} color="#009E06" />
       </TouchableOpacity>
     </View>
     </View>
      </View>
      <View style={tw`bottom-0 android:mt-28 ios:hidden`}>
      <View style={styles.bottomView}>
      <View style={tw`flex-row justify-between mx-14 mt-3.5`}>
       <TouchableOpacity onPress={handleJoin} >
       <AntDesign name="adduser" size={26} color="#009E06" />
       </TouchableOpacity>
       <TouchableOpacity onPress={handleCreate} >
       <Feather name="edit" size={26} color="#009E06" />
       </TouchableOpacity>
     </View>
     </View>
      </View>
      <StatusBar style="hidden" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  toggleButton: {
    fontSize: 18,
    color: 'blue',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '65%',
    color: 'white',
    backgroundColor: 'rgb(20, 20, 20)',
    paddingTop: 40,
    zIndex: 2,
  },
  closeButton: {
    position: 'absolute',
    top: 48,
    borderColor: '#000000',
    right: 16,
  },
  closeButtonText: {
    fontSize: 20,
    color: 'white',
  },
  sidebarItem: {
    paddingVertical: 10,
  },
  sidebarItemText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'left', // Align text to the left
  },
  bottomView: {
    position: 'relative',
    bottom: 0,
    marginBottom: 50,
    left: 0,
    right: 0,
    backgroundColor: '#D9D9D9',
    height: 55,
    borderRadius: 35,
    width: 250,
  },
});
