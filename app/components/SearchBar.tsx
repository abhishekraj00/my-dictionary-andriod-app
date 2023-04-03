import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { WordStateContext } from "../utils/wordStateContext";

const SearchBar = () => {
  const { setWord } = useContext(WordStateContext);
  const [text, setText] = useState<string>("");

  const handleSearch = () => {
    setWord(text);
    setText("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Ionicons name="search-outline" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    margin: 10,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
  },
});
