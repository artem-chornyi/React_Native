import React from "react";
import { View, FlatList, Text, Image } from "react-native";
import { AddTodo, Todo } from "../../components";
import styles from "./styles";
import noItems from '../../../assets/no-items.png'

const MainScreen = props => {
    const { addTodo, todos, removeTodo, onOpenTodo } = props;
    const content = () => {

        if (todos.length === 0) {
            return (
                <View style={ styles.imgWrap } >
                    <Image style={ styles.image } source={noItems} />
                </View>
            )
        }

        return (
            <FlatList
                keyExtractor={ item => item.id.toString()}
                data={todos}
                renderItem={({item}) => {
                    return (
                        <Todo todo={ item } removeTodo={ removeTodo } onOpen={ onOpenTodo } />
                    )
                }}
            />
        )
    };

    return(
        <View>
            <AddTodo onSubmit={ addTodo } />
            { content() }
        </View>
    )
}

export default MainScreen;
