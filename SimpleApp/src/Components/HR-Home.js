import React from 'react';
import { Content, Container } from 'native-base';
import HRFooter from './HR-Footer';
import HRHeader from './HR-Header';
import HRPopupBtn from './HR-PopupBtn';
import HRPagePopup from './HR-PagePopup';


class HRHome extends React.Component {

    state = { showPopup: false };

    pressedPopupBtn() {
        this.setState({ showPopup: true });
    }

    pressedCloseButton() {
        this.setState({ showPopup: false });
    }

    render() {
        return (
            <Container>
            
                <HRHeader title='Home' rightIcon='menu' />
                <Content>
                    <HRPopupBtn onPressed={this.pressedPopupBtn.bind(this)} />
                    <HRPagePopup 
                        onClose={this.pressedCloseButton.bind(this)} 
                        visible={this.state.showPopup} 
                    /> 
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
