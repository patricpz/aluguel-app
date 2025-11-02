import { BellIcon, BookmarkIcon, ChatsTeardropIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
    <Text style={styles.logo}>
      <ChatsTeardropIcon size={30} color="#1ab65c" weight="duotone" /> Helia
    </Text>
    <View style={styles.headerIcons}>
      <TouchableOpacity style={styles.iconWrapper}>
        <BellIcon size={30} color="#fff" />
        <BookmarkIcon size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      logo: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
      },
      headerIcons: {
        flexDirection: "row",
        gap: 12,
      },
      iconWrapper: {
        padding: 6,
        borderRadius: 8,
        flexDirection: "row",        
        gap: 8,
      },
});
