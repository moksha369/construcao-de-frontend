import { useContext, useEffect, useState } from "react";
import { View, FlatList } from "react-native"; 
import { Modal, FAB } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";
import TaskItem from "../components/TaskItem";
import TaskModal from "../components/TaskModal";

function TaskScreen(){
        const{ tarefas, carregarTarefas } =
        useContext(TaskContext);
    const [showModal, setModal] = useState(false);

    useEffect(() => {
        const carrega = async() => {
            await carregarTarefas();
        }
        carrega();
    }, []);

    return 
        <View style={{flex: 1}}>
          <Appbar.Header>
                <Appbar.Content title="Minhas Tarefas"/>
          </Appbar.Header>
         <View style={{ flex: 1, paddingBottom: 24}}>
             <FlatList
                data={tarefas} //Aqui é onde se passa a tarefa e qual tarefa.
                keyExtractor={(item) => item.id}
                renderItem={TaskItem}
             />
          </View>
           <FAB
               style={{ position: "absolute", right: 16, bottom: 16}}
               icon="plus"
               onPress={() => setShowModal(true)}     // 
           />
           <Modal visible={showModal} transparent> // pode ser true e false, se tiver modal ele vai automatico
                <TaskModal setShowModal={setShowModal}/>
            </Modal>
     </View>
}

export default TaskScreen;