import React from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import HRHeader from './HR-Header';
import HRFooter from './HR-Footer';


class HRHandleList extends React.Component {

    goBack() {
    }
    goAddList() {
    }

    render() {
        return (
            <Container>
                <HRHeader 
                title='List' 
                leftIcon='ios-arrow-round-back' 
                onPressLeft={this.goBack.bind(this)} 
                rightIcon='ios-add' 
                onPressRight={this.goAddList.bind(this)} 
                />
                <Content>
                    <Card >
                        <CardItem>
                            <Body>
                            <Text>
                                List
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                Name
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                Words
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <HRFooter
                    onPressHome={() => {}}
                    onPressSettings={() => {}}
                    onPressProfile={() => {}}
                />
            </Container>
        );
    }

}
export default HRHandleList;
