import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const HRBtn = props => (

    <TouchableOpacity 
        onPress={props.onPress} 
        style={[
            styles.ButtonContainer, 
            /* Set medium by default */
            styles.ButtonMedium,
            /* Optional props */
            /* If we type add the xl prop to the component the styles.ButtonXL will be used */
            props.xl && styles.ButtonXL, 
            props.large && styles.ButtonBig, 
            props.small && styles.ButtonSmall, 
            props.medium && styles.ButtonMedium,
            /* Setting some styles up and passing them through props */ 
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
                    /* Set medium by default */
                    styles.TextMedium,
                    /* Optional props */
                    props.xl && styles.TextXL,
                    props.large && styles.TextBig, 
                    props.small && styles.TextSmall, 
                    props.medium && styles.TextMedium, 
                    /* Setting the value of the color style and passing it through props */ 
                    { color: props.textColor }
                ]}
            >
                {/* Pass the content of the text through props */}
                {props.children}
            </Text>
        </View>
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

