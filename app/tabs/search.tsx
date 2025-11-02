import Search from "@/components/Search";
import { BellIcon, BookmarkSimpleIcon, CreditCardIcon, GearFineIcon, InfoIcon, SignOutIcon, UserIcon } from "phosphor-react-native";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function SearchPage() {
    const user = {
        name: "João Silva",
        email: "joao@example.com",
        memberSince: "Membro desde 2023",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    };

    const menuItems = [
        { icon: <UserIcon size={24} color="#fff" />, label: "Meu Perfil" },
        { icon: <BookmarkSimpleIcon size={24} color="#fff" />, label: "Favoritos" },
        { icon: <BellIcon size={24} color="#fff" />, label: "Notificações" },
        { icon: <CreditCardIcon size={24} color="#fff" />, label: "Pagamentos" },
        { icon: <GearFineIcon size={24} color="#fff" />, label: "Configurações" },
        { icon: <InfoIcon size={24} color="#fff" />, label: "Ajuda" },
        { icon: <SignOutIcon size={24} color="#ff6b6b" />, label: "Sair", isLogout: true },
    ];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Search onChangeText={(text) => console.log(text)} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111827',
        paddingTop: 40,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        padding: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#1f1f1f',
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#1ab65c',
    },
    badge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#1ab65c',
        borderWidth: 3,
        borderColor: '#0a0a0a',
    },
    userName: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    userEmail: {
        color: '#888',
        fontSize: 14,
        marginBottom: 4,
    },
    memberSince: {
        color: '#555',
        fontSize: 12,
    },
    menuContainer: {
        padding: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,

    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    menuItemText: {
        color: '#fff',
        fontSize: 16,
    },
    logoutText: {
        color: '#ff6b6b',
    },
});
