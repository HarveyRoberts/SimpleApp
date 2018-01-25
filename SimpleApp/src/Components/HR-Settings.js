import React from 'react';
import { Card, CardItem, Body, Text, Content, Container, Button } from 'native-base';
import { connect } from 'react-redux';
import HRFooter from './HR-Footer';
import HRHeader from './HR-Header';
import { logUserOut } from '../Actions/index';


class HRProfile extends React.Component {
    onSignOut() {
        this.props.logUserOut();
    }

    render() {
        return (
            <Container>
                <HRHeader title='Settings' />
                <Content>
                    <Card >
                        <CardItem>
                            <Body>
                            <Text>
                                Settings
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Button 
                    danger 
                    style={{ width: 320, paddingLeft: 115 }} 
                    onPress={this.onSignOut.bind(this)}
                    >
                        <Text>
                            Sign Out
                        </Text>
                    </Button>
                </Content>
                <HRFooter
                    onPressHome={() => {}}
                    onPressProfile={() => {}}
                    onPressLists={() => {}}
                />
            </Container>
        );
    }
}

export default connect(null, { logUserOut })(HRProfile);
