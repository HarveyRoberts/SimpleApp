import React from'react';
import{Container,Content,Card,CardItem,Form,Item,Label,Input} from 'native-base';
import HRHeader from './HR-Header';
import HRFooter from './HR-Footer';
import {Actions} from 'react-native-router-flux';
import HRButtonFull from './HR-ButtonFull';



class HRCreateList extends React.Component {

    goBack() {
        Actions.HandleList();
    }

    render () {
        return (
            <Container>
                <Content>
                    <Form>
                        <HRHeader title='Create A List' leftIcon='md-arrow-back' onPressLeft={this.goBack.bind(this)}/>
                        <Item stackedLabel>
                            <Label>Name</Label>
                            <Input/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Words</Label>
                            <Input/>
                        </Item>
                        <HRButtonFull text='Create'/>
                    </Form>
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
export default HRCreateList;