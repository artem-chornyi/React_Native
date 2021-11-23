import React, { useState } from "react";
import { View, Button, TextInput, Modal, Text, Alert } from "react-native";
import { THEME } from "../../theme";
import styles from "./styles";

const EditModal = (props) => {
    const { visible, setModal, value, onSave } = props;

    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if ( title.trim().length < 3 ) {
            Alert.alert(
                'Error',
                `Minimum name length is 3! Now ${title.trim().length}`,
            )
        } else {
            onSave(title)
        }
        
    }

    const cancelHandler = () => {
        setModal(false);
        setTitle(value);
    }



    return (
        <Modal
            visible={ visible }
            animationType='slide'
            transparent={ false }
        >
            <View style={ styles.wrap } >
                <TextInput
                    style={ styles.input }
                    placeholder='Enter the title'
                    autoCapitalize={ 'none' }
                    autoCorrect={ false }
                    maxLength={ 64 }
                    value={ title }
                    onChangeText={ setTitle }
                />
                <View style={ styles.buttons } >
                    <Button
                        title='Cancel'
                        onPress={ cancelHandler }
                        color={ THEME.RED_COLOR }
                    />
                    <Button
                        title='Save'
                        onPress={ saveHandler }
                    />
                </View>
            </View>
        </Modal>
    )
}

export default EditModal;