import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Toggle from "../components/toggle";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { useNavigation } from "@react-navigation/native";
import InPartyScreen from "./inPartyScreen";

export default function HostAParty() {
    const navigation = useNavigation();
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [dropDownValue, setDropDownValue] = useState(null);
    const [dropDownItems, setDropDownItems] = useState([
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
        {label: '6', value: '6'}
    ]);

    function createPartyFun() {
        console.log('Party created....');
        navigation.navigate(InPartyScreen)
    }
    
    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <StatusBar style='light'></StatusBar>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <TextInput placeholder='Private Key' style={[styles.hostPartyInp, styles.partyKeyInp]}>123456</TextInput>
                <TextInput placeholder='PARTY NICKNAME' style={[styles.hostPartyInp, styles.partyNameInp]}></TextInput>
                <View style={styles.limitMembersField}>
                    <Text style={styles.maxMemSetTimeOutIndc}>MAX MEMBERS: </Text>
                    <DropDownPicker
                        placeholder={'3'}
                        open={dropDownOpen}
                        value={dropDownValue}
                        items={dropDownItems}
                        setOpen={setDropDownOpen}
                        setValue={setDropDownValue}
                        setItems={setDropDownItems}
                        containerStyle={{height: 40, width: 80}}
                    />
                </View>
                <View style={styles.limitMembersField}>
                    <Text style={styles.maxMemSetTimeOutIndc}>SET TIMEOUT: </Text>
                    <TextInput placeholder="10.00s" style={styles.timeOutInp}></TextInput>
                </View>
                <View style={styles.limitMembersField}>
                    <Text style={styles.maxMemSetTimeOutIndc}>ALLOW USER TO CHANGE SONG: </Text>
                    <Toggle/>
                </View>
                <View style={[styles.limitMembersField, styles.btns]}>
                    <Pressable style={[styles.hostBtns, styles.sndCldBtn]}><Text style={styles.btnText}>CONNECT SOUNDCLOUD</Text></Pressable>
                    <Pressable style={styles.hostBtns} onPress={createPartyFun}><Text style={styles.btnText}>CREATE PARTY</Text></Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    hostPartyInp: {
        borderColor: '#707070',
        borderWidth: 1,
        width: 280,
        borderRadius: 16,
        marginVertical: 20
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
    limitMembersField: {
        flexDirection: 'row',
        width: 280,
        marginVertical: 10
    },
    maxMemSetTimeOutIndc: {
        alignSelf: 'center',
        flex: 1,
        color: '#707070'
    },
    timeOutInp: {
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 20,
        fontSize: 18,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 80
    },
    btns: {
        justifyContent: 'center',
        flexDirection: 'column',
        // flex: 1
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
    sndCldBtn: {
        backgroundColor: '#F8610F'
    }
});