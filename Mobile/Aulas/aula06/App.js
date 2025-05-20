import { SafeAreaProvider } 
  from "react-native-safe-area-context";
import { NavigationContainer } 
  from "@react-navigation/native";
import NavegacaoPilha 
  from "./routes/NavegacaoPilha";
import NavegacaoAbaInferior from "./routes/NavegacaoAbaInferior";
import NavegacaoAbaSuperior from "./routes/NavegacaoAbaSuperior";
import NavegacaoGaveta from "./routes/NavegacaoGaveta";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavegacaoGaveta />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;