import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {
  InknutAntiqua_300Light,
  InknutAntiqua_400Regular,
  InknutAntiqua_500Medium,
  InknutAntiqua_600SemiBold,
  InknutAntiqua_700Bold,
  InknutAntiqua_800ExtraBold,
  InknutAntiqua_900Black,
} from '@expo-google-fonts/inknut-antiqua';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Inter: require('../assets/fonts/Inter-Variable.ttf'),
    InknutAntiqua: require('../assets/fonts/Inknut_Antiqua/InknutAntiqua-Medium.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
      <Stack.Screen
        name="index"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="signup"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="login"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="main"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="fplsignup"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="joc"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="fseason"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="jlprivate"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="notification"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="fplhome"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="fplleague"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="jlpublic"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="clpublic"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="clprivate"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="randomh"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="toc"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="forgot"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="otp"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="newpassword"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="success"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="createpin"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="confirmpin"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="profile"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="history"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="withdraw"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="enterpin"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
       <Stack.Screen
        name="jlone"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="jltwo"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="clone"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="cltwo"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="transactionpin"
        options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
      />
      </Stack>
    </ThemeProvider>
  );
}
