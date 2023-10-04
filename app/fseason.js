import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Modal, Image, View } from 'react-native';
import { Link } from "expo-router";
import { useState, useRef } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';

const PLeague = [
  {
    "id": 1,
    "league": "Innovator FC",
    "score": "572",
  },
  {
    "id": 2,
    "league": "Anelson Builds",
    "score": "572",
  },
  {
    "id": 3,
    "league": "Top Gun FC",
    "score": "572",
  },
  {
    "id": 4,
    "league": "Innovator FC",
    "score": "572",
  },
  {
    "id": 5,
    "league": "Anelson Builds",
    "score": "572",
  },
  {
    "id": 6,
    "league": "Top Gun FC",
    "score": "572",
  },
]

const dropdownOptions = [
  { label: 'Week', value: 'Week' },
  { label: 'Season', value: 'Season' },
];

const weekdownOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
];

export default function App() {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(dropdownOptions[0].value);
  const [selectedWeekdownValue, setSelectedWeekdownValue] = useState(weekdownOptions[0].value);
  const [showWeekdownOptions, setShowWeekdownOptions] = useState(false);
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);

  const WeekdownExample = () => {
    const [open, setOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
    ]);

     const handleItemSelect = (item) => {
      setSelectedItem(item.value);
      setSelectedWeekdownValue(item.value);
    };

    

    return (
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      listMode="SCROLLVIEW"
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={(value) => {
        setSelectedWeekdownValue(value);
      }}
      style={[tw`w-1/3 ml-3 bg-[#009E06]`, showDropdownOptions && tw`mt-12`]} // Add conditional style for marginTop
          itemStyle={tw`w-1/3`}
          dropDownStyle={tw`w-1/3 bg-[#009E06]`}
          modalContentContainerStyle={styles.modalContentContainer}
    />
    );
  };

  const DropdownExample = () => {
     const [open, setOpen] = useState(false);
     const [modalVisible, setModalVisible] = useState(false);
     const [value, setValue] = useState(null);
     const [items, setItems] = useState([
       {label: 'Week', value: 'Week'},
       {label: 'Season', value: 'Season'},
     ]);

    return (
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      listMode="SCROLLVIEW"
      setOpen={setOpen}
      onChangeValue={(value) => {
        setSelectedDropdownValue(value);
        setShowWeekdownOptions(value === 'Week' || selectedWeekdownValue === 'Week');
      }}
      setValue={setValue}
      setItems={setItems}
      style={tw`w-1/3 ml-3 bg-[#009E06]`}
      itemStyle={tw`w-1/3`}
      dropDownStyle={tw`w-1/3 bg-[#009E06]`}
      modalContentContainerStyle={styles.modalContentContainer}
    />
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    modalContentContainer: {
      height: 50,
      width: 'auto',
      // justifyContent: 'center',
      // alignItems: 'center',
      // alignSelf: 'center',
      backgroundColor: '#009E06',
      color: 'black',
    },
    selectedItemText: {
      fontSize: 16,
      // marginTop: 20,
      fontWeight: 'bold',
    },
  });
  
  
  return (
    <View style={tw`bg-black w-full ios:pt-18 android:pt-6 h-full `}>
      <View style={tw`flex-row w-full mx-4 `}>
        <Link href="/fplhome" asChild>
      <Ionicons name="chevron-back" size={30} color="white" />
      </Link>
      <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>MTE Raptors</Text>
      </View>
      <View style={tw`w-full flex-row text-left px-12 pt-2`}>
        <Text style={tw`text-white text-[15px] font-semibold`}>You are no:</Text>
        <Text style={tw`text-[#009E06] pl-1 font-bold text-[15px]`}>12</Text>
      </View>
      <View style={tw`w-full flex-row justify-between px-18 pt-4 text-center items-center`}>
      <Link href="/fplleague" asChild>
        <TouchableOpacity>
        <View style={tw`flex-row`}>
        <View style={tw`w-5 h-5 rounded-full bg-black border-2 border-[#009E06]`}></View>
            <Text style={tw`text-white font-bold pl-4`}>Week</Text>
        </View>
        </TouchableOpacity>
        </Link>
        <View style={tw`flex-row`}>
        <View style={tw`w-5 h-5 rounded-full bg-[#009E06]`}></View>
            <Text style={tw`text-white font-bold pl-4`}>Season</Text>
        </View>
      </View>
      <ScrollView style={tw`w-full pt-4`}>
        <View style={tw`h-full w-full`}>
      {PLeague.map((item) => (
        <View key={item.id} style={tw`w-full mt-1.5 `}>
        <View style={tw` mt-2.5 w-full justify-between flex-row`} >
         <View style={tw`flex-row pl-3`}>
         <Text style={tw`text-white font-bold text-[16px] text-left`}>{item.id}.</Text>
        <Text style={tw`text-white pl-1 font-bold text-[16px] text-left`}>{item.league}</Text>
        </View>
        <Link href="/fplleague" asChild>
        <TouchableOpacity style={tw`flex-row` }>
        <Text style={tw`text-[#009E06] text-[16px] font-bold pr-8 text-right`}>{item.score}</Text>
        </TouchableOpacity>
        </Link>
        </View>
        </View>
      ))}
      </View>
      </ScrollView>
      <StatusBar style="hidden" />
    </View>
  );
}