import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, Pressable } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

export default function Register({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.img}
                source={require('../assets/adaptive-icon.png')}
            />
            <Text style={styles.title}>Hello, Selamat Datang</Text>
            <Text style={styles.subtitle}>Daftar untuk melanjutkan</Text>
            <TextInput
                style={styles.input}
                value={"Nama"}
            />
            <TextInput
                style={styles.input}
                value={"Username"}
            />
            <TextInput
                style={styles.input}
                value={"Ulang Password"}
            />
            <TextInput
                style={styles.input}
                value={"Password"}
            />
            <Pressable style={styles.btnlogin}>
                <Text style={styles.tulisanlogin}>Daftar</Text>
            </Pressable>
            <Text style={styles.register}>Sudah punya akun?<Text style={{ color: "blue" }} onPress={() => { navigation.navigate('login') }}> Masuk</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#B3A492',
    },
    img: {
        height: 80,
        width: 80,
        margin: 10,
    },
    title: {
        fontWeight: 'bold',
        color: "#F5EEC8",
        fontSize: 20,
        marginLeft: 10,
    },
    subtitle: {
        marginLeft: 10,
        marginTop: 2,
        marginBottom: 5,
        color: "white"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
    },
    btnlogin: {
        height: 35,
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 6,
        backgroundColor: '#DADDB1',
        width: 80,
    },
    tulisanlogin: {
        fontWeight: 600,
        color: "#fff"
    },
    register: {
        textAlign: "center",
        marginTop: 5,
        fontSize: 13,
        color: "#F5F5DC"
    }
});
