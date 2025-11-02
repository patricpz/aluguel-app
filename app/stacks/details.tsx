import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Details() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* 🏨 Imagem principal */}
            <View style={styles.imageWrapper}>
                <Image
                    source={{
                        uri: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                    }}
                    style={styles.mainImage}
                />

                {/* Botões de voltar e favorito */}
                <View style={styles.headerIcons}>
                    <TouchableOpacity onPress={handleBack} style={styles.iconBtn}>
                        <Ionicons name="arrow-back" size={22} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconBtn}>
                        <Ionicons name="heart-outline" size={22} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* 🏡 Informações principais */}
            <View style={styles.detailsContainer}>
                <Text style={styles.hotelName}>Royale President Hotel</Text>

                <View style={styles.locationRow}>
                    <Ionicons name="location-outline" size={16} color="#1ED760" />
                    <Text style={styles.locationText}>
                        79 Place de la Madeleine, Paris, 750009, France
                    </Text>
                </View>

                {/* 📸 Galeria */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Gallery Photos</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See All</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {[
                        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                        "https://images.unsplash.com/photo-1582719478148-5f00f8f4f9b4",
                        "https://images.unsplash.com/photo-1600585154206-0c60f09f0b09",
                    ].map((uri, i) => (
                        <Image key={i} source={{ uri }} style={styles.galleryImage} />
                    ))}
                </ScrollView>

                {/* 🏘️ Detalhes */}
                <Text style={styles.sectionTitle}>Details</Text>

                <View style={styles.detailRow}>
                    <View style={styles.detailItem}>
                        <Ionicons name="home-outline" size={22} color="#1ED760" />
                        <Text style={styles.detailLabel}>Hotels</Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Ionicons name="bed-outline" size={22} color="#1ED760" />
                        <Text style={styles.detailLabel}>4 Bedrooms</Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Ionicons name="water-outline" size={22} color="#1ED760" />
                        <Text style={styles.detailLabel}>2 Bathrooms</Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Ionicons name="resize-outline" size={22} color="#1ED760" />
                        <Text style={styles.detailLabel}>4000 sqft</Text>
                    </View>
                </View>

                {/* 📝 Descrição */}
                <Text style={styles.sectionTitle}>Description</Text>
                <Text style={styles.description}>
                    Experience a luxurious stay at the Royale President Hotel, located in
                    the heart of Paris. Enjoy modern rooms, world-class amenities, and
                    breathtaking city views designed for comfort and style.
                </Text>

                <Text style={styles.sectionTitle}>Facilities</Text>

                <View style={styles.facilitiesGrid}>
                    <View style={styles.facilityItem}>
                        <Ionicons name="water-outline" size={22} color="#1ED760" />
                        <Text style={styles.facilityLabel}>Swimming Pool</Text>
                    </View>

                    <View style={styles.facilityItem}>
                        <Ionicons name="wifi-outline" size={22} color="#1ED760" />
                        <Text style={styles.facilityLabel}>WiFi</Text>
                    </View>

                    <View style={styles.facilityItem}>
                        <Ionicons name="restaurant-outline" size={22} color="#1ED760" />
                        <Text style={styles.facilityLabel}>Restaurant</Text>
                    </View>

                    <View style={styles.facilityItem}>
                        <Ionicons name="car-outline" size={22} color="#1ED760" />
                        <Text style={styles.facilityLabel}>Parking</Text>
                    </View>

                    <View style={styles.facilityItem}>
                        <Ionicons name="briefcase-outline" size={22} color="#1ED760" />
                        <Text style={styles.facilityLabel}>Meeting Room</Text>
                    </View>

                    <View style={styles.facilityItem}>
                        <Ionicons name="business-outline" size={22} color="#1ED760" />
                        <Text style={styles.facilityLabel}>Elevator</Text>
                    </View>

                    <View style={styles.facilityItem}>
                        <Ionicons name="barbell-outline" size={22} color="#1ED760" />
                        <Text style={styles.facilityLabel}>Fitness Center</Text>
                    </View>

                    <View style={styles.facilityItem}>
                        <Ionicons name="time-outline" size={22} color="#1ED760" />
                        <Text style={styles.facilityLabel}>24-hours Open</Text>
                    </View>
                </View>

                <View style={styles.locationSection}>
                    <Text style={styles.sectionTitle}>Location</Text>


                </View>


                <Text style={styles.description}>
                    Experience a luxurious stay at the Royale President Hotel, located in
                    the heart of Paris. Enjoy modern rooms, world-class amenities, and
                    breathtaking city views designed for comfort and style.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111827",
    },
    imageWrapper: {
        position: "relative",
    },
    mainImage: {
        width: "100%",
        height: 240,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    headerIcons: {
        position: "absolute",
        top: 50,
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconBtn: {
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 10,
        borderRadius: 12,
    },
    detailsContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    hotelName: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "700",
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    locationText: {
        color: "#A1A1AA",
        fontSize: 14,
        marginLeft: 6,
        flex: 1,
        flexWrap: "wrap",
    },
    sectionHeader: {
        marginTop: 28,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sectionTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        marginTop: 22,
        marginBottom: 10,
    },
    seeAll: {
        color: "#1ED760",
        fontSize: 14,
        fontWeight: "500",
    },
    galleryImage: {
        width: 120,
        height: 100,
        borderRadius: 12,
        marginRight: 12,
    },
    detailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    detailItem: {
        alignItems: "center",
        flexBasis: "22%", // Ensures 4 items per row (100% / 4 = 25%, with some margin for spacing)
    },
    detailLabel: {
        color: "#A1A1AA",
        fontSize: 13,
        marginTop: 4,
    },
    description: {
        color: "#A1A1AA",
        fontSize: 14,
        lineHeight: 20,
        marginTop: 6,
        marginBottom: 40,
    },
    facilitiesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 20,
    },

    facilityItem: {
        width: "23%", // 4 colunas por linha
        alignItems: "center",
        marginVertical: 12,
    },

    facilityLabel: {
        color: "#A1A1AA",
        fontSize: 12,
        textAlign: "center",
        marginTop: 6,
    },
    locationSection: {

    },
});
