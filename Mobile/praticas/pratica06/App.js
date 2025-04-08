import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskScreen from "./Screens/TaskScreen";
import { TaskProvider, TaskContext } from "./contexts/TaskContext";

function App() {
  return 
  <SafeAreaProvider>
    <TaskScreen />
  </SafeAreaProvider>;
}

export default App;

