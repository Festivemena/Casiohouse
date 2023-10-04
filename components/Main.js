import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Image, View, Animated } from 'react-native';
import { Link, useHistory, useRouter } from "expo-router";
import Fpl from '../assets/images/fpl.png';
import Pes from '../assets/images/pes.png';
import Fifa from '../assets/images/fifa.png';
import useAuthStore from '../store/useAuthStore';
import useFplStore from '../store/useFplStore';
import Girl from '../assets/images/profile.jpg';
import Logo from '../assets/images/logo1.png'
// import copy from 'copy-to-clipboard';
import tw from 'twrnc';
import { WalletConnectModal, useWalletConnectModal } from '@walletconnect/modal-react-native';
import { Ionicons, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

const projectId = '8925fd9d843fa9a9c70b950fdacfd1ef';

const providerMetadata = {
  name: 'Casiohouse',
  description: 'Betting, Gaming and Crypto Collide ! Casiohouse revolutionizes the way you play, bet and earn in the digital realm. 🚀🎮🎮💰... Ready to level up ? 🎲🎮',
  url: 'https://twitter.com/Casio_house/',
  icons: ['https://pbs.twimg.com/profile_images/1684486711575805953/haoQpFFC_400x400.jpg'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
};

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { userName, signOut } = useAuthStore();
  const {managerName} = useFplStore();
  const { open, isConnected, address } = useWalletConnectModal();
  const sidebarAnimation = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const handleManager = () => {
    if (managerName) {
      router.push('fplhome');
    }  else {
      router.push('fplsignup');
    }
  };

  const notification = () => {
    router.push('notification');
  }

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  const Signout = () => {
    signOut();
    router.push('login'); 
  };

  const openSidebar = () => {
    setSidebarOpen(true);
    Animated.timing(sidebarAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(sidebarAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setSidebarOpen(false);
    });
  };

  const sidebarTranslateX = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0], // Slide from left (off-screen) to 0 (fully visible)
  });

  return (
    <View style={tw`bg-black h-full text-center items-center `}>
      <StatusBar style='hidden' />
      <View style={tw`w-full pr-5 justify-start ios:pt-10 `}>
          <View style={tw`w-[150px] -ml-2 pt-5 h-[65px]`}>
         <Image source={Logo} style={tw`w-full h-[45px] ml-4`} />
         </View>
        <View style={tw`flex`}>
          <View style={tw`w-full -mt-10 flex-row`}>
            <Text style={tw`text-right w-full pr-4 pt-1 text-[16px] font-bold mx-auto text-white`}>{userName}</Text>
            <Ionicons name="person-circle" size={24} style={tw`text-right `} color="white" />
          </View>
        </View>
      </View>
      <View style={tw`w-6/7 shadow-lg android:rounded-[42px] mt-2 ios:rounded-[52px] bg-[#D9D9D9] text-center items-center justify-center android:h-[150px] ios:h-[180px]`}>
      <Text style={tw`text-[#009E06] font-bold pt-0.5`}>Withdrawable Balance</Text>
      <Text style={tw`text-black font-black android:text-[41px] ios:text-[47px]`}>{isConnected ? '$129.44' : 'NIL'}</Text>
      <Text style={tw`text-black font-black android:text-[12px] ios:text-[10px]`}>{address}</Text>
      {isConnected ? "" :
      <TouchableOpacity onPress={open} style={tw`bg-[#009E06] mt-2 android:-mt-3 rounded-xl w-[164px] h-[36px]`}>
        <Text style={tw`text-center text-white font-semibold pt-2 text-[16px] `}>Connect Wallet</Text>
      </TouchableOpacity>
      }
      <WalletConnectModal projectId={projectId} providerMetadata={providerMetadata} />
      </View>
      <View style={tw`w-full h-1/2`}>
       <Text style={[tw`text-white mt-4 ml-8 text-left`, { fontFamily: 'SpaceMono' } ]}>Select Plugins:</Text>
         <TouchableOpacity onPress={handleManager} style={tw`mt-2.5`}>
         <View style={tw`w-full mt-2 ml-8 flex-row`}>
         <Image style={tw`rounded-[4px]`} source={Fpl} width={52} height={30} />
         <Text style={tw`text-white font-semibold mt-1 android:text-[14px] ios:text-[16px] pl-4`}>Fantasy Premier League</Text>
         </View>
         </TouchableOpacity>
     {/* <Link href="/main" asChild>
     <TouchableOpacity style={tw`mt-2.5`}>
     <View  style={tw`w-full mt-2 ml-8 flex-row`}>
     <Image style={tw`rounded-[4px]`} source={Fifa} width={52} height={30} />
     <Text style={tw`text-white font-semibold android:text-[14px] ios:text-[16px] pl-4`}>Fifa Mobile 2024</Text>
     </View>
     </TouchableOpacity>
     </Link>
     <Link href="/main" asChild>
     <TouchableOpacity style={tw`mt-2.5`}>
     <View  style={tw`w-full mt-2 ml-8 flex-row`}>
     <Image style={tw`rounded-[4px]`} source={Pes} width={52} height={30} />
     <Text style={tw`text-white font-semibold android:text-[14px] ios:text-[16px] pl-4`}>e-Football PES 2024</Text>
     </View>
     </TouchableOpacity>
     </Link> */}
     <View style={tw`w-full text-center`}>
      <Text style={tw`text-center pt-5 ios:text-lg android:text-[14px] text-[#009E06]`}>More Plugins coming soon</Text>
     </View>
      </View>
      <View style={tw`bottom-0 android:hidden ios:mt-18`}>
      <View style={styles.bottomView}>
      <View style={tw`flex-row justify-between mx-14 mt-2`}>
       <TouchableOpacity onPress={toggleSidebar}>
       <Ionicons onPress={toggleSidebar} name="md-menu-sharp" size={36} color="#009E06" />
       </TouchableOpacity>
       <TouchableOpacity onPress={notification}>
     <FontAwesome name="bell" size={36} color="black" />
       </TouchableOpacity>
     </View>
     </View>
      </View>
      <View style={tw`bottom-0 android:mt-28 ios:hidden`}>
      <View style={styles.bottomView}>
      <View style={tw`flex-row justify-between mx-14 mt-3.5`}>
       <TouchableOpacity onPress={toggleSidebar}>
       <Ionicons name="md-menu-sharp" size={28} color="#009E06" />
       </TouchableOpacity>
       <TouchableOpacity onPress={notification}>
     <FontAwesome name="bell" size={26} color="black" />
       </TouchableOpacity>
     </View>
     </View>
      </View>
      {isSidebarOpen && (
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.overlayBackground} onPress={closeSidebar} />
          <Animated.View style={[styles.sidebar, tw``, { transform: [{ translateX: sidebarTranslateX }] }]}>
            <Link href="/profile">
              <TouchableOpacity style={styles.sidebarItem}>
                <View style={tw`items-center w-full`}>
                  <Image style={tw`rounded-full mt-12 w-[180px] h-[180px]`} source={Girl} />
                  <Text style={tw`font-bold text-[18px] text-center text-[#009E06]`}>{userName}</Text>
                </View>
              </TouchableOpacity>
            </Link>
            <TouchableOpacity style={[tw`ml-4 mt-2`, styles.sidebarItem]}>
              <Link href="/profile">
                <View style={tw`flex-row justify-start w-full`}>
                  <MaterialIcons name="account-circle" size={20} color="white" />
                  <Text style={tw`text-white ml-2 text-[18px]`}>Profile</Text>
                </View>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity style={[tw`ml-4 mt-2`, styles.sidebarItem]}>
              <Link href="/withdraw">
                <View style={tw`flex-row justify-start w-full`}>
                  <FontAwesome name="money" size={20} color="white" />
                  <Text style={tw`text-white ml-2 text-[18px]`}>Withdraw</Text>
                </View>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity style={[tw`ml-4 mt-2`, styles.sidebarItem]}>
              <Link href="/transactionpin">
                <View style={tw`flex-row justify-start w-full`}>
                  <AntDesign name="lock" size={20} color="white" />
                  <Text style={tw`text-white ml-2 text-[18px]`}>Transaction PIN</Text>
                </View>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity style={[tw`ml-4 mt-2`, styles.sidebarItem]}>
              <Link href="/history">
                <View style={tw`flex-row justify-start w-full`}>
                  <MaterialIcons name="history" size={20} color="white" />
                  <Text style={tw`text-white ml-2 text-[18px]`}>Transaction History</Text>
                </View>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity onPress={Signout} style={[tw`ml-4 mt-2`, styles.sidebarItem]}>
                <View style={tw`flex-row justify-start w-full`}>
                  <AntDesign name="logout" size={18} color="red" />
                  <Text style={tw`text-white ml-2 text-[18px]`}>Sign Out</Text>
                </View>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </View>
  );
};

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

