import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import ListItem from "../components/ListItem";

export default ClipScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const { clips } = user;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            text={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
