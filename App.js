import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import styles from './styles';
import { Navbar } from './src/components';
import { MainScreen, TodoScreen, } from './src/screens';

export default function App() {
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([
        {id: '1', title: 'test 1'},
    ])

    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            title,
        }

        setTodos([
            ...todos,
            newTodo,
        ])
    }

    // const allTodos = () => {
    //     return (
    //         todos.map(todo => <Todo todo={ todo } key={ todo.id } /> )
    //     )
    // }

    const removeTodo = id => {
        const todo = todos.find(t => t.id === todoId)

        Alert.alert(
            "Delet element",
            `Are you sure you want to delete ${todo.title}?`,
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Delete",
                onPress: () => {
                    setTodoId(null);
                    setTodos((prev) => prev.filter(todo => todo.id !== id));
                },
                style: 'destructive',
              },
            ],
            { cancelable: false }
        )
    }

    const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            if ( todo.id === id ) {
                todo.title = title
            }

            return todo
        }))
    }

    const goBack = () => setTodoId(null);

    let content = (
        <MainScreen
            addTodo={ addTodo }
            removeTodo={ removeTodo }
            todos={ todos }
            onOpenTodo={id => {
                setTodoId(id)
            }}
        />
    )

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId);

        content = <TodoScreen
            goBack={ goBack }
            todo={selectedTodo}
            removeTodo={ removeTodo }
            setTodos={ setTodos }
            allTodos={ todos }
            onSave={ updateTodo }
        />
    }


    return (
        <View >
            <Navbar title={'Todo App'} />
            <View style={styles.container} >
                { content }
            </View>
        </View>
    );
}
