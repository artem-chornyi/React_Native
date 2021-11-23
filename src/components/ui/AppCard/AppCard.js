import React from "react";
import { View } from "react-native";
import styles from "./styles";

const AppCart = (props) => {
    const { children, style } = props;

    return (
        <View
            style={{
                ...styles.default,
                ...style,
            }}
            >
            { children }
        </View>
    )
}

export default AppCart;
