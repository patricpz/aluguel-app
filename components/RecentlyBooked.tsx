import { useRouter } from "expo-router";
import { BookmarkSimple, Star } from "phosphor-react-native";
import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface Hotel {
    id: string;
    name: string;
    location: string;
    price: string;
    rating: string;
    reviews: string;
    image: any;
    saved?: boolean;
}

export default function RecentlyBooked({ hotels: initialHotels }: { hotels: Hotel[] }) {
    const router = useRouter();
    const [hotels, setHotels] = useState<Hotel[]>(initialHotels);

    const toggleSaved = (id: string) => {
        const updatedHotels = hotels.map((hotel) =>
            hotel.id === id ? { ...hotel, saved: !hotel.saved } : hotel
        );
        setHotels(updatedHotels);
    };

    function handleDetails() {
        router.navigate("/stacks/details");
        // Handle login logic here
    }

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.title}>Recently Booked</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            {/* Lista vertical */}
            <FlatList
                data={hotels}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable onPress={handleDetails} style={styles.recentCardWrapper}>
                        <View style={styles.recentCard}>
                            <Image source={item.image} style={styles.recentImage} />

                            <View style={{ flex: 1 }}>
                                <Text style={styles.recentName}>{item.name}</Text>
                                <Text style={styles.recentCity}>{item.location}</Text>

                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
                                    <Star size={14} color="#FFD700" weight="fill" />
                                    <Text style={styles.ratingLine}>
                                        {item.rating} <Text style={styles.reviewText}>({item.reviews} reviews)</Text>
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.priceAndSave}>
                                <Text style={styles.recentPrice}>{item.price}</Text>
                                <Text style={{ color: "#A1A1AA", fontSize: 11 }}>/ night</Text>
                                <Pressable onPress={() => toggleSaved(item.id)} style={{ marginTop: 6 }}>
                                    <BookmarkSimple
                                        size={22}
                                        color={item.saved ? "#1ED760" : "#A0A0A0"}
                                        weight={item.saved ? "fill" : "regular"}
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </Pressable>
                )}
                contentContainerStyle={{ paddingBottom: 40 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "#111827",
        paddingHorizontal: 5,
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },
    seeAll: {
        color: "#1ED760",
        fontSize: 14,
        fontWeight: "600",
    },
    recentCardWrapper: {
        marginBottom: 20,
    },
    recentCard: {
        flexDirection: "row",
        backgroundColor: "#1f222a",
        padding: 14,
        borderRadius: 18,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 6,
    },
    recentImage: {
        width: 72,
        height: 72,
        borderRadius: 14,
        marginRight: 12,
    },
    recentName: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
    },
    recentCity: {
        color: "#A1A1AA",
        fontSize: 13,
    },
    ratingLine: {
        color: "#22C55E",
        fontSize: 13,
        marginLeft: 4,
    },
    reviewText: {
        color: "#A1A1AA",
        fontSize: 12,
    },
    priceAndSave: {
        alignItems: "flex-end",
        justifyContent: "center",
    },
    recentPrice: {
        color: "#1ED760",
        fontWeight: "700",
        fontSize: 16,
    },
});
