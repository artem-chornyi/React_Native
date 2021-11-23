import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Todo = ({ todo, removeTodo, onOpen }) => {

    const onPress = () => {
        onOpen(todo.id)
    }

    const onLongPress = () => {
        removeTodo(todo.id)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={ onPress }
            onLongPress={ onLongPress }
        >
            <View style={ styles.todo } >
                <Text>
                    { todo.title }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Todo;