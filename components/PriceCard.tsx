import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PriceCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$29</Text>
        <Text style={styles.night}> / night</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Now!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "#1B1C1E",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  price: {
    color: "#1ED760",
    fontSize: 28,
    fontWeight: "bold",
  },
  night: {
    color: "#aaa",
    fontSize: 16,
    marginLeft: 4,
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#1ED760",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default PriceCard;
