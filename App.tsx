import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import { useColorScheme } from "react-native";
import SearchedWord from "./app/screens/SearchedWord";
import { useState } from "react";
import { WordStateContext } from "./app/utils/wordStateContext";
import { searchDataProp } from "./app/model/apiDataType";

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  const [word, setWord] = useState<string>("");
  const [searchWordData, setSearchWordData] = useState<searchDataProp[]>([]);
  return (
    <WordStateContext.Provider
      value={{ word, setWord, searchWordData, setSearchWordData }}
    >
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SearchedWord" component={SearchedWord} />
        </Stack.Navigator>
      </NavigationContainer>
    </WordStateContext.Provider>
  );
}
