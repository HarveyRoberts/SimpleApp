
import React from 'react';
import { Header, Title, Text, Button, Left, Right, Body, Icon } from 'native-base';


export default class HRHeader extends React.Component {

    showRight() {
        if (this.props.rightIcon) {
            return (   
                <Right>
                    <Text /> 
                    <Button transparent onPress={this.props.onPressRight}>
                        <Icon name={this.props.rightIcon} />
                    </Button>
                </Right>
            );
        }
        return (
            <Right />
        );
    }

    showLeft() {
        if (this.props.leftIcon) {
            return (
                <Left>

                    <Button transparent onPress={this.props.onPressLeft}>
                        <Icon name={this.props.leftIcon} />
                    </Button>
                </Left>
            );
        }
        return (
            <Left />
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
