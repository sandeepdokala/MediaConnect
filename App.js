import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  function hostPartyBtn() {
    Alert.alert('Page inka building', 'Host a party should be open now!', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK' },
    ]);
  }
  function joinPartyBtn() {
    Alert.alert('Page inka building', 'Join a party should be open now!', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK' },
    ]);
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MediaConnect</Text>
        </View>
        <View style={styles.imgLogo}>
          <Text style={styles.textInc}>There will be an image here</Text>
        </View>
        <View style={styles.btns}>
          <Pressable style={styles.btnParent} onPress={hostPartyBtn}><Text style={styles.btnChild}>Host a party</Text></Pressable>
          <Pressable style={styles.btnParent} onPress={joinPartyBtn}><Text style={styles.btnChild}>Join a party</Text></Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#9C13BC",
    width: "100%",
    // height: 78,
    padding: 20,
    flex: 1
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
  },
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  imgLogo: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    flex: 10
  },
  textInc: {
    fontSize: 20,
    textAlign: 'center',
  },
  btns: {
    marginVertical: 30,
    flex: 5
  },
  btnParent: {
    backgroundColor: "#9C13BC",
    paddingVertical: 20,
    paddingHorizontal: 60,
    marginVertical: 16,
    borderRadius: 50
  },
  btnChild: {
    color: "#fff"
  }
});
