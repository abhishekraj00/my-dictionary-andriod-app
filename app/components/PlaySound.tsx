import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { useTheme } from "@react-navigation/native";

const PlaySound = ({ mp3File }: { mp3File: string }) => {
  const { colors } = useTheme();

  const handlePlay = async () => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync({ uri: mp3File });
      await soundObject.playAsync();
    } catch (error) {
      console.log("Error playing audio:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handlePlay}
      >
        <Text style={[styles.text, { color: colors.background }]}>
          Play Sound
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PlaySound;
