import { FadersHorizontalIcon, MagnifyingGlassIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchProps {
    placeholder?: string;
    value?: string;
    onChangeText: (text: string) => void;
}

export default function Search({
    placeholder = "Search",
    value,
    onChangeText,
}: SearchProps) {
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <MagnifyingGlassIcon size={20} color="#7C7C8A" weight="bold" />

                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#7C7C8A"
                    value={value}
                    onChangeText={onChangeText}
                />

                <FadersHorizontalIcon size={20} color="#1ED760" weight="bold" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginTop: 16,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1f222a",
        borderRadius: 12,
        paddingHorizontal: 14,
        height: 48,
        borderWidth: 1,
        borderColor: "#1C1F26",
    },
    input: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        marginHorizontal: 10,
        paddingVertical: 0,
    },
});
