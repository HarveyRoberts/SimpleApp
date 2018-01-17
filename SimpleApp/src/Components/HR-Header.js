import React from 'react';
import { Container, Header, Title, Content, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class HRHeader extends React.Component {

    showMenu(){
        if(this.props.showMenu) {
            return (
                <Right>

                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            );
        }
        return (
            <Right/>
        );
    }

    render() {
        return (
            <Header>
                <Left/>
                <Body>
                    <Title>
                        {this.props.title}
                    </Title>
                </Body>
                {this.showMenu()}
            </Header>
        );
    }
}
