import React from 'react';
import { View, Modal, Button, Text } from 'react-native';

const HRPagePopup = props => (
    <Modal animationType="slide" visible={props.visible}>
        <View 
            style={{ 
                flexDirection: 'row', 
                justifyContent: 'flex-end', 
                marginTop: 20, 
                marginRight: 5,
                backgroundColor: 'red' 
            }}
        > 
            <Button 
                title="close" 
                onPress={props.onClose} 
                style={{ width: 50, height: 20, backgroundColor: 'blue' }} 
            />
        </View>
        <View 
        style={{ 
            flex: 1, 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'green' 
            }}
        >
            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
                The Popup!
            </Text>
        </View>
    </Modal>
);

export default HRPagePopup;
