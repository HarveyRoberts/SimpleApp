import React from 'react';
import { Card, CardItem, Body, Text, Content, Container } from 'native-base';
import HRFooter from './HR-Footer';
import HRHeader from './HR-Header';


class HRProfile extends React.Component {

    render() {
        return (
            <Container>
                <HRHeader title='Profile' />
                <Content>
                    <Card >
                        <CardItem>
                            <Body>
                            <Text>
                                PROFILE
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <HRFooter
                    onPressHome={() => {}}
                    onPressSettings={() => {}}
                    onPressLists={() => {}}
                />
            </Container>
        );
    }
}
export default HRProfile;
