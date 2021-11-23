import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export const Navbar = (props) => {
    const { title } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text} >
                { title }
            </Text>
        </View>
    )
}
