import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext } from "react";
import { WordStateContext } from "../utils/wordStateContext";
import PlaySound from "../components/PlaySound";
import { useTheme } from "@react-navigation/native";

const SearchedWord = () => {
  // Get the search word data and colors from the context and theme
  const { searchWordData } = useContext(WordStateContext);
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Loop through each item in the search word data */}
      {searchWordData.map((item, i) => {
        return (
          <View
            style={[
              styles.wordContainer,
              { backgroundColor: colors.background },
            ]}
            key={item.word + i}
          >
            {/* Display the word */}
            <Text style={[styles.wordText, { color: colors.text }]}>
              {`${i + 1}. ${item?.word}`}
            </Text>

            {/* Display each phonetic sound and an audio player if available */}
            <View>
              {item.phonetics.map((sound, index) => {
                return (
                  <View style={styles.phoneticContainer} key={index}>
                    {sound.audio && <PlaySound mp3File={sound.audio} />}
                  </View>
                );
              })}
            </View>

            {/* Display the meaning of the word */}
            <View>
              {item.meanings.map((wordMeaning, index) => {
                return (
                  <View key={index}>
                    <Text style={[styles.meaningText, { color: colors.text }]}>
                      {wordMeaning?.partOfSpeech}
                    </Text>
                    {wordMeaning.definitions.map((ele, ind) => {
                      return (
                        <Text
                          style={[
                            styles.definitionText,
                            { color: colors.text },
                          ]}
                          key={ind}
                        >
                          {`${ind + 1}. ${ele.definition}`}
                        </Text>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default SearchedWord;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  wordContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  wordText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  phoneticContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  phoneticText: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  meaningText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  definitionText: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
  },
});
