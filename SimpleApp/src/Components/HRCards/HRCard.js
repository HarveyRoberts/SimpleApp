import React from 'react';
import { View, StyleSheet } from 'react-native';

const HRCard = props => (
    <View style={styles.container}>
        <View style={styles.section1}>
            {props.section1}
        </View>
        <View style={styles.section2}>
            { props.children }
        </View>
        <View style={styles.section3}>
            {props.section3}
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
