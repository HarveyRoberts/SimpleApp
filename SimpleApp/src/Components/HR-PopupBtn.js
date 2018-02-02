import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const HRPopupBtn = props => (
    <TouchableOpacity style={styles.popupBtn} onPress={props.onPressed}>
        <Text style={{ fontSize: 15, color: 'white' }}> See Popup </Text>
    </TouchableOpacity>
);

export default HRPopupBtn;

const styles = {
    popupBtn: {
        backgroundColor: '#3174F1',
        borderRadius: 50,
        width: 180,
        marginTop: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'column'
    }
};

