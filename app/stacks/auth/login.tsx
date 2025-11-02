import { useRouter } from "expo-router";
import { EnvelopeSimple, Lock } from "phosphor-react-native";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    function handleLogin() {
        router.navigate("/tabs/home"); 
        // Handle login logic here
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça login na sua conta</Text>

            {/* Email input */}
            <View style={styles.inputContainer}>
                <EnvelopeSimple size={20} color="#9ca3af" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#9ca3af"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {/* Password input */}
            <View style={styles.inputContainer}>
                <Lock size={20} color="#9ca3af" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#9ca3af"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            {/* Remember me */}
            <View style={styles.rememberContainer}>
                <Switch
                    value={remember}
                    onValueChange={setRemember}
                    trackColor={{ false: "#1f2937", true: "#22c55e" }}
                    thumbColor="#fff"
                />
                <Text style={styles.rememberText}>Remember me</Text>
            </View>

            {/* Sign up button */}
            <TouchableOpacity onPress={handleLogin} style={styles.signUpButton}>
                <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
                <View style={styles.line} />
                <Text style={styles.orText}>or continue with</Text>
                <View style={styles.line} />
            </View>

            {/* Social buttons */}
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
                        }}
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
                        }}
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/0/747.png",
                        }}
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
            </View>

            {/* Sign in link */}
            <Text style={styles.footerText}>
                Already have an account?{" "}
                <Text style={styles.signInLink}>Sign in</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 24,
        justifyContent: "center",
    },
    title: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1f2937",
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 16,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        color: "white",
        paddingVertical: 12,
    },
    rememberContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
    },
    rememberText: {
        color: "#9ca3af",
        marginLeft: 10,
    },
    signUpButton: {
        backgroundColor: "#22c55e",
        borderRadius: 30,
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 24,
    },
    signUpText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
    divider: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#374151",
    },
    orText: {
        color: "#9ca3af",
        marginHorizontal: 10,
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 30,
    },
    socialButton: {
        backgroundColor: "#1f2937",
        borderRadius: 12,
        padding: 14,
    },
    socialIcon: {
        width: 24,
        height: 24,
        tintColor: "white",
    },
    footerText: {
        color: "#9ca3af",
        textAlign: "center",
    },
    signInLink: {
        color: "#22c55e",
        fontWeight: "bold",
    },
});
