import { BookmarkSimple, Star } from "phosphor-react-native";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface HotelCardProps {
  name: string;
  location: string;
  price: string;
  rating: string;
  image: any;
  saved?: boolean;
}

export default function HotelCard({
  name,
  location,
  price,
  rating,
  image,
  saved = false,
}: HotelCardProps) {
  const [isSaved, setIsSaved] = useState(saved);

  const toggleSave = () => setIsSaved(!isSaved);

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      {/* ⭐ Badge de avaliação */}
      <View style={styles.ratingBadge}>
        <Star size={12} color="#fff" weight="fill" />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>

      {/* 💾 Botão de salvar */}
      <Pressable style={styles.saveButton} onPress={toggleSave}>
        <BookmarkSimple
          size={20}
          color={isSaved ? "#1ED760" : "#fff"}
          weight={isSaved ? "fill" : "regular"}
        />
      </Pressable>

      {/* ℹ️ Informações */}
      <View style={styles.infoContainer}>
        <Text style={styles.hotelName}>{name}</Text>
        <Text style={styles.location}>{location}</Text>

        <Text style={styles.price}>
          {price} <Text style={styles.perNight}>/ per night</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 220,
    backgroundColor: "#1A1A1A",
    borderRadius: 20,
    marginRight: 16,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 130,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  ratingBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#1ED760",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
  },
  ratingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 4,
  },
  saveButton: {
    position: "absolute",
    bottom: 70,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 12,
    padding: 4,
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  hotelName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  location: {
    color: "#aaa",
    fontSize: 13,
    marginBottom: 4,
  },
  price: {
    color: "#1ED760",
    fontSize: 14,
    fontWeight: "700",
  },
  perNight: {
    color: "#aaa",
    fontSize: 12,
  },
});
