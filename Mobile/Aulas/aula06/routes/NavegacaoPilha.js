import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();

function NavegacaoPilha() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          header: (props) => (
            <View style={{ height: 64, 
            backgroundColor: "blue",
            justifyContent: "center",
            paddingLeft: 16 }}>
              <Text style={{ fontSize: 24, 
                color: "white" }}>Home</Text>
            </View>
          )
        }}
      />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

export default NavegacaoPilha;