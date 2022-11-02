import { Button, StyleSheet, Text, View } from "react-native";


export default function HomeScreen() {
    return (
        <View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    modalView: {
        // margin:60,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20,
        // padding: 35,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    newNote: {
        flex: 1,
        margin: 40,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
});
