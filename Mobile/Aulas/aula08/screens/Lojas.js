import { useState, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { Searchbar } from "react-native-paper";

import { LojaContext } from "../contexts/LojaContext";
import ListaVertical from "../components/ListaVertical";

function Lojas({ route }) {
  const { carregando, buscarLojas } = useContext(LojaContext);
  const { categoria } = route.params;
  const [filtro, setFiltro] = useState("");
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Searchbar
        value={filtro}
        onChangeText={setFiltro}
        placeholder={`Buscar em ${categoria}`}
        onIconPress={() => buscarLojas(filtro)}
        onClearIconPress={() => buscarLojas("")}
      />
      {carregando ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={50} />
        </View>
      ) : (
        <ListaVertical />
      )}
    </View>
  );
}

export default Lojas;