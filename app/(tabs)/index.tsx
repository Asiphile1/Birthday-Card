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
        <TouchableOpacity
          style={styles.fontButton}
          onPress={() => setFontSize(fontSize + 2)}
        >
          <Text style={styles.fontButtonText}>Increase Font</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fontButton}
          onPress={() => setFontSize(fontSize - 2)}
        >
          <Text style={styles.fontButtonText}>Decrease Font</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addTextButton} onPress={addTextToCard}>
        <Text style={styles.addTextButtonText}>Add Text</Text>
      </TouchableOpacity>

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
    color: "#000",
  },
  card: {
    height: 500,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FF00FF",
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#E8AD",
  },
  cardLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardRight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  fontButton: {
    width: "35%",
    // gap: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FDD7E4",
    alignItems: "center",
    marginHorizontal: 60,
  },
  fontButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  addTextButton: {
    marginVertical: 10,
    width: "30%",
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#2196F3",
    alignItems: "center",
    alignSelf: "center",
  },
  addTextButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  imageButton: {
    marginTop: 10,

    padding: 12,
    width: "30%",
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    alignSelf: "center",
  },
  imageButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});