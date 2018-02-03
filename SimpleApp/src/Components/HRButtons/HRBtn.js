import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const HRBtn = props => (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={[
            styles.ButtonContainer, 
            styles.ButtonMedium,
            props.xl && styles.ButtonXL, 
            props.large && styles.ButtonBig, 
            props.small && styles.ButtonSmall, 
            props.medium && styles.ButtonMedium, 
            { 
                alignSelf: props.alignSelf, 
                borderRadius: props.roundness, 
                backgroundColor: props.bgColor, 
                width: props.width 
            }
        ]} 
    >
        <View>
            <Text 
                style={[
                    styles.TextMedium,
                    props.xl && styles.TextXL,
                    props.large && styles.TextBig, 
                    props.small && styles.TextSmall, 
                    props.medium && styles.TextMedium, 
                    { color: props.textColor }
                ]}
            >
                {props.children}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    ButtonContainer: {
        margin: '3%',
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonXL: {
        height: 62
    },
    TextXL: {
        fontSize: 25,
        marginLeft: '14%',
        marginRight: '14%'
    },
    ButtonBig: {
        height: 50
    },
    TextBig: {
        fontSize: 21,
        marginLeft: '11%',
        marginRight: '11%'
    },
    ButtonMedium: {
        height: 44
    },
    TextMedium: {
        fontSize: 18,
        marginLeft: '8%',
        marginRight: '8%'
    },
    ButtonSmall: {
        height: 35
    },
    TextSmall: {
        fontSize: 16,
        marginLeft: '5%',
        marginRight: '5%'
    }
});


export default HRBtn;

