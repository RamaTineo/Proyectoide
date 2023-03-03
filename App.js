import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([{ id: 1, value:"Item 1"}]);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () =>{
    setItems((oldArray) => [...oldArray, {id: Date.now(), value: itemText}]);
    setItemText("");
  };

const [modalVisible, setModalVisible] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);

const removeItem = (id) =>{
  setItems((oldArry) => oldArry.filter((item)=> item.id !== id));
  setModalVisible(false);
  selectedItem(null);
};
const selectItem = (item) =>{
  setSelectedItem(item);
  setModalVisible(true);
};

  return (
    <View style={styles.screen}>
      <View style={styles.buscador}>
        <TextInput
          placeholder="Item de lista"
          style={styles.textimput_buscador}
          onChangeText={onChangeText}
          value={itemText}
        />

        <Button 
        title="Agregar"
         style={styles.button}
         onPress={addItem}
          />

      </View>
    
      
      
        <FlatList
        data={items}
        renderItem={(itemData)=>(
          <Pressable style={styles.contentList} onPress={()=>{
            selectItem(itemData.item)
          }}>
            <Text style={styles.item}>{itemData.item.value}</Text>
            </Pressable>
          )}
        />
        <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
          <View style={styles.modalContainer}>
            <View styles={styles.modalTitle}>
              <Text>Eliminar Item</Text>
            </View>
            <View styles={styles.modalContent}>
            <Text>Esta seguro que desea eliminar el item {selectedItem?.value}?</Text>
          </View>
          <View styles={styles.modalActions}>
            <Button title="Cancelar" onPress={()=>{
              setModalVisible(false)
              setSelectedItem(null);

            }}/>
            <Button title="Eliminar" onPress={()=>{
              removeItem(selectedItem.id)

}}/>
          </View>
      </View>
   
        </Modal>
</View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: "#839073",
  },
  buscador: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textimput_buscador: {
    width: 250,
    backgroundColor: "#6E6362",
    color: "white",
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#394053",
  },
  main: {
    height: 550,
    padding: 30,
    margin: 5,
    backgroundColor: "#394053",
    borderRadius: 20,
  },
  item: {
    color: "white",
    backgroundColor: "#7CAE7A",
  },
});
