import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import WordDisplay from "../components/WordDisplay";

const HomeScreen = () => {
  // Get the current theme colors
  const { colors } = useTheme();

  return (
    <View
      style={[{ backgroundColor: colors.background }, styles.mainContainer]}
    >
      {/* Render the search bar component */}
      <SearchBar />
      {/* Render the word of the day container */}
      <View style={[styles.wordContainer, { backgroundColor: colors.card }]}>
        {/* Display the heading */}
        <Text style={[styles.headingText, { color: colors.text }]}>
          Word Of The Day
        </Text>
        {/* Render the WordDisplay component */}
        <WordDisplay />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    marginTop: 50,
    gap: 10,
  },
  wordContainer: {
    marginTop: 10,
    padding: 10,
    height: 300,
    width: 250,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
});
