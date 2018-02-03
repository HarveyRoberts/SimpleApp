import React from 'react';
import { Text } from 'react-native';
import HRBtn from './HRButtons/HRBtn';


class HRLists extends React.Component {

    static navigationOptions = {
        title: 'UI Elements'
    }

    render() {
        return (
            <HRBtn bgColor='#279cfc' textColor='white' alignSelf='center' >
                <Text>
                    Sign Up
                </Text>
            </HRBtn>
        );
    }
}
export default HRLists;
