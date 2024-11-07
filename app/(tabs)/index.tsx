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
        placeholder="Write a sweet message to the birthday BOY or GIRL"
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
    color: "#fff",
  },
  card: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FF00FF",
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#E8AD",
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
    borderWidth: 2,
    borderColor: "#FF00FF",
    padding: 20,
    borderRadius: 30,
    marginBottom: 20,
    backgroundColor: "#FDD7E4",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  imageButton: {
    borderWidth: 2,
    borderColor: "#FF00FF",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#FDD7E4",
    borderRadius: 5,
    alignItems: "center",
  },
  imageButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  Button: {
    borderWidth: 2,
    borderColor: "#FF00FF",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#FDD7E4",
    borderRadius: 5,
    alignItems: "center",
  },
});
