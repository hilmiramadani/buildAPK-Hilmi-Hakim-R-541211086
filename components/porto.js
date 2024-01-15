
import { Text, StyleSheet, View, ScrollView, Image, Button, Pressable } from 'react-native';
import React, { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

export default function Porto({ navigation }) {
    // const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Image style={styles.profil}
                    source={require('../assets/tth.jpg')}
                />
                <Text style={styles.title}>Hilmi Hakim Ramadani</Text>
                <Text style={styles.paragraf}>Saya adalah siswa SMK Telkom Purwokerto dengan jurusan Rekayasa Perangkat Lunak. </Text>
                <Pressable style={styles.btn}>
                    <Text style={styles.contact}>Contact</Text>
                </Pressable>

                <Text style={styles.judul}>My Recent Project</Text>

                <View style={styles.bgcard}>
                    <Image style={styles.img}
                        source={require('../assets/p5.png')}
                    />
                    <Text style={styles.titleCard}>Kalkulator Statistika</Text>
                    <Text style={styles.subtitleCard}>Vba Excel</Text>
                </View>
                <View style={styles.bgcard}>
                    <Image style={styles.img}
                        source={require('../assets/desainWeb.png')}
                    />
                    <Text style={styles.titleCard}>PDS Online</Text>
                    <Text style={styles.subtitleCard}>Web Desain</Text>
                </View>
                <View style={styles.bgcard}>
                    <Image style={styles.img}
                        source={require('../assets/webPorto.png')}
                    />
                    <Text style={styles.titleCard}>Website Portofolio</Text>
                    <Text style={styles.subtitleCard}>Website</Text>
                </View>

                <Text style={styles.judul}>My Skills</Text>
                <View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#0245A3",
    },
    scrollView: {
        marginHorizontal: 1,
    },
    title: {
        color: '#DEFCF9',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
    },
    paragraf: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    profil: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btn: {
        height: 35,
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 15,
        backgroundColor: "#EE5007",
        width: 80,
    },
    contact: {
        color: "#fff"
    },
    judul: {
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        color: "#F8DE22",
        marginTop: 35,
        marginBottom: 12,
        fontSize: 15,
    },
    bgcard: {
        backgroundColor: "#FF9000",
        borderRadius: 6,
        marginBottom: 10,
        height: 195
    },
    img: {
        height: 130,
        width: 250,
        borderRadius: 6,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    titleCard: {
        color: "#862B0D",
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 6,
    },
    subtitleCard: {
        color: "white",
        marginLeft: 15,
    }
});