import React from 'react';
import { TextInput, View, Text } from 'react-native';

const HRInput = props => (
    <View style={styles.viewStyle}>
        <Text style={styles.labelStyle}>{props.label}</Text>
        <TextInput
            secureTextEntry={props.secureTextEntry}
            placeholder={props.placeholder}
            autoCorrect={false}
            style={styles.inputStyle}
            onChangeText={props.onChangeText} 
            value={props.email}
        />
    </View>
);


const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 20,
        height: 40
    },
    viewStyle: {
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 5
    }
};


export default HRInput;
