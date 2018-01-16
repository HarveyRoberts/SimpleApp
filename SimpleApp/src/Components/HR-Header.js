import React from 'react';
import { Container, Header, Title, Content, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class HRHeader extends React.Component {
    render() {
        return (
            <Header>
                <Left/>
                <Body>
                    <Title>
                        Lists
                    </Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        );
    }
}
