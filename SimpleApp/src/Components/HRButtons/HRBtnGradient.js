import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

const HRBtn = props => (
    /* See HRBtn for details */
    <TouchableOpacity onPress={props.onPress} >
    {/* Replaced View with LinearGradient from Expo */}
        <LinearGradient 
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
                    width: props.width 
                }
            ]}
            /* Passed the colors of the gradient through props */
            colors={props.colors}
            /* Passed the start point through props */
            start={props.start}
            /* Passed the end point through props */
            end={props.end}
        >
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
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    /* Container styles */
    ButtonContainer: {
        margin: '3%',
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    /* XL prop styles */
    ButtonXL: {
        height: 62
    },
    TextXL: {
        fontSize: 25,
        marginLeft: '14%',
        marginRight: '14%'
    },
    /* Large prop styles */
    ButtonBig: {
        height: 50
    },
    TextBig: {
        fontSize: 21,
        marginLeft: '11%',
        marginRight: '11%'
    },
    /* Medium prop styles (set by default) */
    ButtonMedium: {
        height: 44
    },
    TextMedium: {
        fontSize: 18,
        marginLeft: '8%',
        marginRight: '8%'
    },
    /* Small prop styles */
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

