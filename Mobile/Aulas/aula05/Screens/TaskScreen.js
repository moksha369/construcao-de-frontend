import { useState, useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import {
  Appbar,
  List,
  Text,
  TextInput,
  FAB,
  Modal,
  Button,
  Divider
} from "react-native-paper";

import { TaskContext } from "../contexts/TaskContext";

function TaskScreen() {
  const { tarefas, adicionarTarefa, removerTarefa } = useContext(TaskContext);
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState(0);
  const [tarefa, setTarefa] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [exibeModal, setExibeModal] = useState(false);
  const [exibeAlerta, setExibeAlerta] = useState(false);
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Lista de Tarefas" />
      </Appbar.Header>
      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <List.Item
            onPress={() => {
              item.concluida = !item.concluida;
              setRefresh(!refresh);
            }}
            onLongPress={() => {
              setIdTarefaSelecionada(item.id);
              setExibeAlerta(true);
            }}
            title={item.nome}
            right={(props) => (
              <List.Icon
                {...props}
                icon={
                  item.concluida ? "check-circle-outline" : "circle-outline"
                }
              />
            )}
          />
        )}
      />
      <FAB style={styles.fab} icon="plus" onPress={() => setExibeModal(true)} />
      <Modal visible={exibeModal} contentContainerStyle={styles.modal}>
        <TextInput
          label="Nova Tarefa"
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
        />
        <Button
          onPress={() => {
            adicionarTarefa(tarefa);
            setExibeModal(false);
            setTarefa("");
          }}
        >
          Salvar
        </Button>
      </Modal>
      <Modal visible={exibeAlerta} contentContainerStyle={styles.modal}>
        <Text variant="labelLarge">Deseja apagar a tarefa?</Text>
        <Button onPress={() => setExibeAlerta(false)}>Não</Button>
        <Button
          onPress={() => {
            removerTarefa(idTarefaSelecionada);
            setIdTarefaSelecionada(0);
            setExibeAlerta(false);
          }}
        >
          Sim
        </Button>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  modal: {
    backgroundColor: "white",
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
});

export default TaskScreen;

