import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import styles from "./styles";

export const AddTodo = (props) => {
    const { onSubmit } = props;
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Введите дело')
        }
        
    }

    return(
        <View style={styles.block} >
            <TextInput
                value={ value }
                onChangeText={ setValue }
                style={ styles.input }
                placeholder='Enter the name of the case...'
                autoCorrect={ false }
                autoCapitalize="none"
                keyboardType="numeric"
            />
            <Button title='Add' onPress={ pressHandler } />
        </View>
    )
}