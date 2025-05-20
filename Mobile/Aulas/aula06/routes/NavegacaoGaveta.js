import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const Drawer = createDrawerNavigator();

function NavegacaoGaveta() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}

export default NavegacaoGaveta;