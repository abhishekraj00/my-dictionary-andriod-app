import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { getRandomWord } from "../utils/commonFunction";
import { dictionaryWordApi } from "../utils/apiData";
import { WordStateContext } from "../utils/wordStateContext";
import Button from "./Button";
import { useTheme } from "@react-navigation/native";

const WordDisplay = () => {
  // Get the search word data and colors from the context and theme
  const { word, searchWordData, setSearchWordData } =
    useContext(WordStateContext);
  const { colors } = useTheme();

  // make State for Loadding
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let finalWord = word ? word : getRandomWord();
    setIsLoading(true);

    fetch(`${dictionaryWordApi}${finalWord}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("oops! Word Not Found 😥");
        }
      })
      .then((wordData) => {
        setSearchWordData(wordData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [word]);

  return (
    <View>
      {/* When api is fetching data loading is shown */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <>
          {/* showing data after fetching is done */}
          <View style={{ backgroundColor: colors.card }}>
            <View style={styles.wordContainer}>
              <Text style={[styles.headingText, { color: colors.text }]}>
                Word :
              </Text>
              <Text style={[styles.textData, { color: colors.text }]}>
                {searchWordData[0]?.word}
              </Text>
            </View>
            <View style={styles.wordContainer}>
              <Text style={[styles.textData, { color: colors.text }]}>
                Meaning :{" "}
                {searchWordData[0]?.meanings[0].definitions[0].definition}
              </Text>
            </View>
          </View>
          <Button />
        </>
      )}
    </View>
  );
};

export default WordDisplay;

const styles = StyleSheet.create({
  wordContainer: {
    margin: 5,
    flexDirection: "row",
    width: 200,
    alignItems: "flex-start",
  },
  headingText: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
  textData: {
    fontSize: 14,
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});
