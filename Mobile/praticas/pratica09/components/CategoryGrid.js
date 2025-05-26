import { useContext } from "react";
import { useNavigation } "@react-navigation/native";
import { FlatList, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { StoreContext } from "../context/StoreContext";

function CategoryGrid(item){
    const { categories } = useContext(StoreContext);
        return(
<View>
  <Text variant="titleMedium">Categorias</Text>
  <FlatList
    	data={categories}
    	numColumns={2}
    	showsVerticalScrollIndicator={false}
    	renderItem={({ item }) => (
      	<View style={{ flex: 1, margin: 4 }}>
        	<Button
          	mode="outlined"
          	icon={item.icone}
          	onPress={() =>
            	navigation.navigate("Search", { categoria: item.nome })
          	}
        	/>
      	</View>
    	)}
    	keyExtractor={(item, index) => `categoria-${index}`}
  />
</View>

    );
}

export default CategoryGrid;