import { Text, View, TextInput, StyleSheet } from 'react-native';

function RegistrarScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.appTitle}>Criar conta</Text>
            </View>
            <View style={styles.formRegister}>
                <TextInput syle={styles.input} placeholder="Nome" />
                <TextInput syle={styles.input} placeholder="E-mail" keyboardType="email-adress" />
                <TextInput syle={styles.input} placeholder="Senha" secureTextEntry />
                <Button title="Registrar" color="blue"/>
            </View>
        </View>
    );
}

const styles = create.StyleSheet({
    container: {
        flex: 1,
    },
    appBar: {
        height: 64,
        backgroundColor: "blue",
        padding: 16,
        justifyContent: "center",
        elevation: 3,
        marginBottom: 8
    },
    appTitle: {
        fontSize: "24",
        color: "white",
    },
    formRegister: {
        paddingHorizontal: 16
    },
    input: {
        padding: 16,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 8,
        marginBottom: 8
    }
})

export default RegistrarScreen;