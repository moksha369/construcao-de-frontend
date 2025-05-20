import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categorias from '../screens/Categorias'
import Lojas from './Lojas';

const Stack = createNaativeStackNavigator();

function BuscaNavigator(){
    return
     <Stack.Navigator>
        <Stack.Screen name="Categorias" component={Categorias}/>
        <Stack.Screen name="Lojas" component={Lojas}/>
    </Stack.Navigator>
}

export default BuscaNavigator;