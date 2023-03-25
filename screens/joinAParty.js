import { StatusBar } from 'expo-status-bar';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function JoinAParty() {

    return (
        <View style={styles.container}>
            <StatusBar style='light'></StatusBar>
            <View style={styles.emptyPush}></View>
            <View style={styles.content}>
                <TextInput placeholder='Private Key' style={[styles.hostPartyInp, styles.partyKeyInp]}></TextInput>
                <TextInput placeholder='YOUR NICKNAME' style={[styles.hostPartyInp, styles.partyNameInp]}></TextInput>
            </View>
            <View style={[styles.limitMembersField, styles.btns]}>
                <Pressable style={[styles.hostBtns, styles.sndCldBtn]}><Text style={styles.btnText}>CONNECT SOUNDCLOUD</Text></Pressable>
            </View>
            <View style={styles.emptyPush}></View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    content: {
        flex: 6,
    },
    hostPartyInp: {
        borderColor: '#707070',
        borderWidth: 1,
        width: 280,
        borderRadius: 16,
        marginVertical: 20,
    },
    partyKeyInp: {
        fontSize: 28,
        paddingVertical: 20,
        paddingHorizontal: 30,
        textAlign: 'center',
    },
    partyNameInp: {
        fontSize: 16,
        paddingVertical: 16,
        paddingHorizontal: 30
    },
    emptyPush: {
        flex: 1,
    },
    btns: {
        justifyContent: 'center',
        flexDirection: 'column',
        // flex: 1,
        width: 280,
        marginVertical: 30
    },
    hostBtns: {
        backgroundColor: "#9C13BC",
        paddingVertical: 20,
        marginVertical: 16,
        borderRadius: 50,
        alignSelf: 'center',
        width: '100%'
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        textAlign: 'center',
    },
});