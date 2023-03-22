import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation();

  function joinPartyBtn() {
    Alert.alert('Page inka building', 'Join a party should be open now!', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK' },
    ]);
  }
  function soundCloudConnect() {
    Alert.alert(' ', 'HEHEHEH',[
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK' },
    ]);
  }

  return (
    <View style={styles.container}>
      {/* <StatusBar style='light'></StatusBar> */}
        <View style={styles.imgLogo}>
          <Text style={styles.textInc}>There will be an image here</Text>
        </View>
        <View style={styles.btns}>
          <Pressable style={styles.btnParent} onPress={() => navigation.navigate('HostAParty')}><Text style={styles.btnChild}>HOST A PARTY</Text></Pressable>
          <Pressable style={styles.btnParent} onPress={() => navigation.navigate('JoinAParty')}><Text style={styles.btnChild}>JOIN A PARTY</Text></Pressable>
          <Pressable style={[styles.btnParent, {backgroundColor: "#F8610F"}]} onPress={soundCloudConnect}><Text style={styles.btnChild}>GO TO SOUNDCLOUD</Text></Pressable>
        </View>
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
  imgLogo: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 20,
    flex: 10
  },
  textInc: {
    fontSize: 20,
    textAlign: 'center',
  },
  btns: {
    marginVertical: 30,
    flex: 10
  },
  btnParent: {
    backgroundColor: "#9C13BC",
    paddingVertical: 20,
    paddingHorizontal: 60,
    marginVertical: 16,
    borderRadius: 50,
    alignSelf: 'center'
  },
  btnChild: {
    color: "#fff",
    fontSize: 18
  },
});
