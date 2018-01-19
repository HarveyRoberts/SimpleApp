import React from 'react';
import { Container, Header, Title, Content, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class HRHeader extends React.Component {

    showRight(){
        if(this.props.rightIcon) {
            return (
                <Right>

                    <Button transparent>
                        <Icon name={this.props.rightIcon} />
                    </Button>
                </Right>
            );
        }
        return (
            <Right/>
        );
    }

    showLeft(){
        if(this.props.leftIcon) {
            return (
                <Left>

                    <Button transparent>
                        <Icon name={this.props.leftIcon} />
                    </Button>
                </Left>
            );
        }
        return (
            <Left/>
        );
    }

    render() {
        return (
            <Header>
                {this.showLeft()}
                <Body>
                    <Title>
                        {this.props.title}
                    </Title>
                </Body>
                {this.showRight()}
            </Header>
        );
    }
}
