import { View, Text, StyleSheet, TextInput } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";


export default function InPartyScreen() {
    const partyKey = 123456;
    const maxMembers = 3;

    return (
        <View style={styles.container}>
            <View style={styles.partyDetails}>
                <Text style={styles.partyDetailsText}>PARTY CODE: {partyKey}</Text>
                <Text style={styles.partyDetailsText}>NO OF MEMBERS IN THE PARTY: {maxMembers}</Text>
            </View>
            <View style={styles.memberDetailsSection}>
                <View style={styles.memberDetails}>
                    <Text>YOU - YOURNICKNAME</Text>
                </View>
                <View style={styles.memberDetails}>
                    <Text>YOU - YOURNICKNAME</Text>
                </View>
            </View>
            <View style={styles.partyScreenBtns}>
                <Pressable style={styles.btnParent}><Text style={styles.btnChild}>OPEN PLAYER</Text></Pressable>
                <Pressable style={styles.btnParent}><Text style={styles.btnChild}>STOP SESSION</Text></Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        paddingVertical: 20
    },
    partyDetails: {
        // borderColor: 'black',
        // borderWidth: 2,
        // borderStyle: 'solid',
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '80%'
    },
    partyDetailsText: {
        lineHeight: 40
    },
    memberDetailsSection: {
        width: '80%'
    },
    memberDetails: {
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 40,
        marginVertical: 10
    },
    partyScreenBtns: {
        width: '60%',
        flex: 1,
        justifyContent: 'flex-end',
        marginVertical: 20
    },
    btnParent: {
        backgroundColor: '#9C13BC',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginVertical: 20,
        width: '100%',
        alignItems: 'center'
    },
    btnChild: {
        color: '#fff',
        fontSize: 18
    }
});