import React from 'react';
import { Card, CardItem, Body, Text, Content, Container } from 'native-base';
import HRFooter from './HR-Footer';
import HRHeader from './HR-Header';


class HRHome extends React.Component {

    render() {
        return (
            <Container>
                <HRHeader title='Home' rightIcon='menu' />
                <Content>
                    <Card >
                        <CardItem>
                            <Body>
                            <Text>
                                HOMEEEEE
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <HRFooter
                    onPressProfile={() => {}}
                    onPressSettings={() => {}}
                    onPressLists={() => {}}
                />
            </Container>
        );
    }
}

export default HRHome;
