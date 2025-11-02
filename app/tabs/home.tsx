import Header from "@/components/Header";
import RecentlyBooked, { Hotel } from "@/components/RecentlyBooked";
import Search from "@/components/Search";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const hotels = [
    {
      id: "1",
      name: "Emeralda De Hotel",
      location: "Paris, France",
      price: "$29",
      rating: "4.8",
      image: { uri: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    },
    {
      id: "2",
      name: "Laluna Resort",
      location: "Istanbul, Turkey",
      price: "$32",
      rating: "4.9",
      image: { uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
    },
  ];

  const initialHotels: Hotel[] = [
    {
      id: "1",
      name: "President Hotel",
      location: "Paris, France",
      price: "$35",
      rating: "4.8",
      reviews: "4,378",
      image: { uri: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
      saved: true,
    },
    {
      id: "2",
      name: "Palms Casino",
      location: "Amsterdam, Netherlands",
      price: "$29",
      rating: "4.9",
      reviews: "5,283",
      image: { uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
    },
    {
      id: "3",
      name: "Palazzo Versace",
      location: "Rome, Italia",
      price: "$36",
      rating: "4.7",
      reviews: "3,277",
      image: { uri: "https://images.unsplash.com/photo-1600585154206-0c60f09f0b09" },
      saved: true,
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search placeholder="Search" onChangeText={(text) => console.log(text)} />

      {/* <FlatList
        data={hotels}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HotelCard {...item} />}
      /> */}

      {/* ✅ Apenas uma vez */}
      <RecentlyBooked hotels={initialHotels} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
