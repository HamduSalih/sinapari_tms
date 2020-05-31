import React from 'react';
import { Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'
import styles from './NewJobButtonStyles'
import { Actions } from 'react-native-router-flux';

const NewJobButton = () => {
    return(
        <MaterialIcons
            style={styles.iconButton} 
            size={50} 
            name={'add-circle-outline'} 
            color={'#141d48'}
            onPress = {() => Actions.addJob()}
        />
    )
}

export default NewJobButton