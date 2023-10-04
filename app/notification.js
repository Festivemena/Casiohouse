import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, ScrollView, Pressable, Image, View } from 'react-native';
import tw from 'twrnc';
import Girl from '../assets/images/profile.jpg'
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const eventsArray = [
    {
      eventType: 'Gameweek Update',
      message: 'Congratulations you came out first for the week',
      amount: 100,
      time: 'Today @2:38pm',
    },
    {
      eventType: 'Random H2H update',
      message: 'Congratulations you won your random head 2 head',
      amount: 35550,
      time: '2023-08-04 16:15:00',
    },
    {
        eventType: 'H2H update',
        message: 'Received payment from John',
        amount: 100,
        time: '2023-08-04 15:30:00',
      },
      {
        eventType: 'League Update',
        message: 'Paid for groceries',
        amount: -50,
        time: '2023-08-04 16:15:00',
      },
      {
        eventType: 'Payment',
        message: 'Received payment from John',
        amount: 100,
        time: '2023-08-04 15:30:00',
      },
      {
        eventType: 'Expense',
        message: 'Paid for groceries',
        amount: -50,
        time: '2023-08-04 16:15:00',
      },
      {
        eventType: 'Payment',
        message: 'Received payment from John',
        amount: 100,
        time: '2023-08-04 15:30:00',
      },
      {
        eventType: 'Expense',
        message: 'Paid for groceries',
        amount: -50,
        time: '2023-08-04 16:15:00',
      },
      {
        eventType: 'Payment',
        message: 'Received payment from John',
        amount: 100,
        time: '2023-08-04 15:30:00',
      },
      {
        eventType: 'Expense',
        message: 'Paid for groceries',
        amount: -50,
        time: '2023-08-04 16:15:00',
      },
  ];

export default function History() {
  return (
    <View style={tw`bg-black h-full pt-6 ios:pt-16 `}>
        <View style={tw`flex-row w-full mx-4 `}>
      <Link href="/main" asChild>
    <Ionicons name="chevron-back" size={30} color="white" />
    </Link>
    <Text style={tw`pl-4 ios:text-[24px] android:text-[20px] android:pt-1 text-white font-bold`}>Notifications</Text>
    </View>
    <ScrollView contentContainerStyle={styles.container}>
    {eventsArray.map((item, index) => (
        <View key={index} style={styles.eventItem}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventType}>{item.eventType}</Text>
            <Text
              style={[
                styles.amount,
                item.amount >= 0 ? styles.positiveAmount : styles.negativeAmount,
              ]}
            >
              ${item.amount}
            </Text>
          </View>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      ))}
    </ScrollView>
      <StatusBar style="hidden" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    eventItem: {
      backgroundColor: '#A9A9A9',
      padding: 16,
      borderRadius: 8,
      marginBottom: 10,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    eventHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    eventType: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    amount: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    positiveAmount: {
      color: '#00FF0A',
    },
    negativeAmount: {
      color: '#F44336',
    },
    message: {
      fontSize: 14,
      color: '#ffffff',
      textAlign: 'left',
      marginBottom: 8,
    },
    time: {
      fontSize: 12,
      color: '#ffffff',
    },
  });