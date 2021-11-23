import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import { THEME } from "../../theme";
import { AppCart } from "../../components/ui";
import EditModal from "../../components/EditModal";

const TodoScreen = props => {
    const { goBack, todo, removeTodo, onSave } = props;
    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        onSave(todo.id, title);
        setModal(false);
    }

    return(
        <View>
            <EditModal
                visible={ modal }
                setModal={ setModal }
                value={ todo.title }
                onSave={ saveHandler }
            />

            <AppCart style={ styles.card } >
                <Text style={ styles.title } >
                    {todo.title}
                </Text>
                <Button
                        title='Edit'
                        color={ THEME.GREY_COLOR }
                        onPress={ () => setModal(true) }
                    />
            </AppCart>

            <View style={ styles.buttons } >
                <View style={ styles.button } >
                    <Button
                        title='Back'
                        color={ THEME.GREY_COLOR }
                        onPress={ goBack }
                    />
                </View>
                <View style={ styles.button }>
                    <Button
                        title='Delete'
                        color={ THEME.RED_COLOR }
                        onPress={ () => removeTodo(todo.id) }
                    />
                </View>
                
            </View>
        </View>
    )
}

export default TodoScreen;