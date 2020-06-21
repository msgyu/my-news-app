import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";

const Stack = createStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "記事一覧" }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={{ title: "記事" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
