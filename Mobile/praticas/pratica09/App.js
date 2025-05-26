import { SafeAreaProvider } from "react-native-safe-area-context";
import { StoreProvider } from "./context/StoreContext";
import { MainNavigator } from "./routes/MainNavigator";

function App() {

  return (
    <SafeAreaProvider>
      <StoreProvider>
        <MainNavigatorContainer>
          <MainNavigator />
        </MainNavigatorContainer>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

export default App;
