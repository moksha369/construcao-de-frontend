import { View, Text, StyleSheet } from "react-native";

function PerfilScreen() {
    return(
        <View style={{flex: 1}}>
            <View style={styles.perfil}>
                <View styles={styles.photo}></View>
                <View styles={styles.card}>
                    <Text>Nome</Text>
                    <Text>E-Mail</Text>
                </View>
            </View>
            <View>
                <Text>Habilidades</Text>
            <View>
                    <Text>JavaScript</Text>
                    <Text>React Native</Text>
                 </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    perfil: {
        flexDirection: "row",
        padding: 16,
        borderBottomWidth: 1,
    },
    photo: {
        flexDirection: 80,
        height: 80,
        backgroundColor: "lightgray",
        borderRadius: 40,
    },
    card: {
        justifyContent: "center",
        paddingLeft: 16,
    },
    skillSection: {
        paddingLeft:   16,
    },
    skills: {
        flexDirection: "row"
    },
});

export default PerfilScreen;