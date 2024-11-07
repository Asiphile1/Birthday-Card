import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [cardText, setCardText] = useState("");
  const [image, setImage] = useState(null);

  // Function to pick an image from the library
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Function to handle adding text to the card
  const addTextToCard = () => {
    setCardText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Birthday Card</Text>

     
      <View style={styles.card}>
        {image && <Image source={{ uri: image }} style={styles.cardImage} />}
        <Text style={[styles.cardText, { fontSize: fontSize }]}>
          {cardText}
        </Text>
      </View>

      
      <TextInput
        style={styles.input}
        placeholder="Enter your message"
        onChangeText={(value) => setText(value)}
        value={text}
      />

      
      <View style={styles.controls}>
        <Button
          title="Increase Font"
          onPress={() => setFontSize(fontSize + 2)}
        />
        <Button
          title="Decrease Font"
          onPress={() => setFontSize(fontSize - 2)}
        />
      </View>

      
      <Button title="Add Text" onPress={addTextToCard} />

      
      <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
        <Text style={styles.imageButtonText}>Add an Image</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  cardText: {
    color: "#333",
    textAlign: "center",
  },
  cardImage: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  imageButton: {
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 5,
    alignItems: "center",
  },
  imageButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
