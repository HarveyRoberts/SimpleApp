import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const HRHeaderBasic = props => (
   <View style={[styles.container, props.style]} >
        <Image
          style={{ width: 54, height: 50, margin: 5, marginRight: 0, marginTop: 4 }}
          source={{ uri: props.icon }}
        />
        <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: '700', color: props.titleColor }}>
                {props.title}
            </Text>
            <Text style={{ fontSize: 18, color: props.subtitleColor }}>
                {props.subtitle}
            </Text>
        </View>
   </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        paddingRight: 80
    }

});

export default HRHeaderBasic;

