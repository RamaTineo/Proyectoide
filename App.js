import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View
        style={styles.buscador}>
        <TextInput placeholder='Buscar' style={styles.textimput_buscador} />
        <Button title="Agregar" style={styles.button} />
      </View>
      <View style={styles.main}>
        <TextInput placeholder='Item de lista' style={styles.textimput_main} />
        <TextInput placeholder='Item de lista' style={styles.textimput_main} />
        <TextInput placeholder='Item de lista' style={styles.textimput_main} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
   
    padding: 30,
    backgroundColor:"#839073"
  },
  buscador: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textimput_buscador: {
    width:250,
    backgroundColor: "#6E6362",
    color: "white",
    borderRadius:15,

  },
  button: {
    backgroundColor: "#394053",
  },
  main:{
    height:550,
padding:30,
margin:5,
backgroundColor:"#394053",
borderRadius:20,

  },
  textimput_main:{
    color:"white",
    backgroundColor:"#7CAE7A",
    }
});
