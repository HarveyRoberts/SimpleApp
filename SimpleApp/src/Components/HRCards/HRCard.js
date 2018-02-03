import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const HRCard = props => (
    <View style={styles.container}>
        <View style={styles.section2}>
            <Image source={{ uri: 'https://semantic-ui.com/images/avatar2/large/kristy.png' }} style={{ height: 50, width: 50 }} />
        </View>
        <View style={styles.section3}>
            { props.children }
        </View>

    </View>
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderRadius: 5,
        margin: 15,
        alignItems: 'center',
        elevation: 2,
        backgroundColor: '#ebebeb'
    }
});

export default HRCard;