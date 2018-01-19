import React from 'react';
import {Card,CardItem,Body,Text,Content,Container} from 'native-base';
import HRFooter from './HR-Footer';
import HRHeader from './HR-Header';

import { Actions } from 'react-native-router-flux';

class HRLists extends React.Component {

    render(){
        return(
            <Container>
                <HRHeader title='Lists'/>
                <Content>
                    <Card >
                        <CardItem>
                            <Body>
                            <Text>
                                LISTS
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <HRFooter
                    onPressHome={() => {Actions.Home()}}
                    onPressSettings={() => {Actions.Settings()}}
                    onPressProfile={() => {Actions.Profile()}}
                />
            </Container>
        );

    }
}
export default HRLists;