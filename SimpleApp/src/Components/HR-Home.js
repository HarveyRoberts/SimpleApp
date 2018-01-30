import React from 'react';

import { View } from 'react-native';
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
            <View>
                <HRPopupBtn onPressed={this.pressedPopupBtn.bind(this)} />
                <HRPagePopup 
                    onClose={this.pressedCloseButton.bind(this)} 
                    visible={this.state.showPopup} 
                />
            </View>
        );
    }
}

export default HRHome;
