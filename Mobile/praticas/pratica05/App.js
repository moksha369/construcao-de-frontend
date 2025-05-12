import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./Screens/LoginScreen";
import ChatScreen from "./Screens/ChatScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SettingsScreen from "./Screens/SettingsScreen";

function App(){
  return <SafeAreaProvider>
    <SettingsScreen />
  </SafeAreaProvider>;
}

export default App; 