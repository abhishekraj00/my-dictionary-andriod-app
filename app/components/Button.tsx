import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  useNavigation,
  useTheme,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const Button = () => {
  const { colors } = useTheme();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleClick = () => {
    navigation.navigate("SearchedWord");
  };
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.background }]}
        onPress={handleClick}
      >
        <Text style={[styles.buttonText, { color: colors.text }]}>
          See More...
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 50,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
