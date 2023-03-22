import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

let viewColor = '#707070';
let viewFloat = 'row-reverse';
export default function Toggle() {
    const [toggleOn, setToggleOn] = useState(false);

    function onToggle() {
        setToggleOn(!toggleOn);
        if (toggleOn) {
            viewColor = '#9C13BC';
            viewFloat = 'row';
        } else {
            viewColor = '#707070'
            viewFloat = 'row-reverse';
        }
        console.log(toggleOn);
    }

    return (
    <Pressable style={[styles.toggleMain, { backgroundColor: `${viewColor}`, flexDirection: `${viewFloat}` }]} onPress={onToggle}>
        <View style={styles.emptyPush}></View>
        <View style={styles.toggleInnerCircle}></View>
    </Pressable>
    )
}

const styles = StyleSheet.create({
    toggleMain: {
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 30,
        height: 40,
        width: 80,
        backgroundColor: '#707070',
        padding: 4,
        // flexDirection: 'row'
    },
    emptyPush: {
        flex: 1
    },
    toggleInnerCircle: {
        backgroundColor: '#fff',
        height: 30,
        width: 30,
        borderRadius: 50
    }
});