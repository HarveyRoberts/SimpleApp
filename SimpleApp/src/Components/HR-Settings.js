import React from 'react';
import {Card,CardItem,Body,Text,Content,Container,Button} from 'native-base';
import HRFooter from './HR-Footer';
import HRHeader from './HR-Header';
import {connect} from 'react-redux';
import {logUserOut} from '../Actions/index';

import { Actions } from 'react-native-router-flux';

class HRProfile extends React.Component {
    onSignOut() {
        this.props.logUserOut();
    }

    render(){
        return(
            <Container>
                <HRHeader title='Settings'/>
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

                    <Button danger style={{width:320, paddingLeft:115}} onPress={this.onSignOut.bind(this)}>
                        <Text>
                            Sign Out
                        </Text>
                    </Button>
                </Content>
                <HRFooter
                    onPressHome={() => {Actions.Home()}}
                    onPressProfile={() => {Actions.Profile()}}
                    onPressLists={() => {Actions.ListSection()}}
                />
            </Container>
        );

    }
}

export default connect(null, {logUserOut})(HRProfile);