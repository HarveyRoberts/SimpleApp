import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HRHeaderCenter = props => (
    <View style={[styles.container, { backgroundColor: props.bgColor }]}>
        <Text style={[styles.title, { color: props.titleColor, fontSize: props.titleSize }]}>
            {props.title}
        </Text>
        <Text 
        style={[
            styles.subtitle, 
            { 
                color: props.subtitleColor, 
                fontSize: props.subtitleSize 
            }
        ]}
        >
            {props.subtitle}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        margin: 0,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 25,
    },
    subtitle: {
        fontSize: 15,
    }
});

export default HRHeaderCenter;
