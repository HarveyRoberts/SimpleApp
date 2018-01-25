import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';

const HRPopupBtn = props => (
    <TouchableOpacity onPress={props.onPressed}>
        <Card >
            <CardItem>
                <Body>
                    <Text>
                        See Popup
                    </Text>
                </Body>
            </CardItem>
        </Card>
    </TouchableOpacity>
);

export default HRPopupBtn;
