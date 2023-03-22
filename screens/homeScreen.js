import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation();

  function soundCloudConnect() {
    Alert.alert('Connect to SoundCloud', 'Connecting to soundcloud... Wait Forever!!',[
      { text: 'OK' },
    ]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light'></StatusBar>
        <View style={styles.imgLogoSec}>
          {/* <Text style={styles.textInc}>There will be an image here</Text> */}
          <Image 
            source={require('../img/home.png')}
            style = {styles.imgLogo}
          />
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
  imgLogoSec: {
    width: '80%',
    marginVertical: 20,
    marginTop: 40,
    flex: 10,
    justifyContent: 'center'
  },
  imgLogo: {
    height: 320,
    width: 320,
    alignSelf: 'center',
  },
  textInc: {
    fontSize: 20,
    textAlign: 'center',
  },
  btns: {
    marginVertical: 30,
    flex: 8
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
