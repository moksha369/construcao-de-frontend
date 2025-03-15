import { StyleSheet, Text, View } from "react-native";

function ProfileScreen() {
    return (
        <View>
            <View>
                <View>
                    <Text>Jõao da silva</Text>
                    <Text>Desenvolvedor React Native</Text>
                </View>
            </View>
            <Text>Habilidades</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#FFFBFE",
        padding: 16
    },
    profileSection: { flexDirection: "row", alignItems: "center", marginBottom: 24, },
    profileImage: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#EADDFF", marginRight: 16, },
    profileName: { fontSize: 20, fontWeight: "600", color: "#1C1B1F", },
    profileRole: { fontSize: 16, color: "#49454F", },
    sectionTitle: { fontSize: 18, fontWeight: "500", color: "#1C1B1F", marginBottom: 8, },
    skillsSection: { flexDirection: "row", flexWrap: "wrap", gap: 8, },
});

export default ProfileScreen;