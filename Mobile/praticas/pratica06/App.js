import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskScreen from "./Screens/TaskScreen";

function App() {
  return 
  <SafeAreaProvider>
    <TaskScreen />
  </SafeAreaProvider>;
}

export default App;

