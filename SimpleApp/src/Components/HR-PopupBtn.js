import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const HRPopupBtn = props => (
    <TouchableOpacity style={{marginTop:50}} onPress={props.onPressed}>
        <Text> HRPopupBtn </Text>
    </TouchableOpacity>
);

export default HRPopupBtn;
