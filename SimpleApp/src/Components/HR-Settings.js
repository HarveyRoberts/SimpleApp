import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { logUserOut } from '../Actions/index';


class HRProfile extends React.Component {
    onSignOut() {
        this.props.logUserOut();
    }

    render() {
        return (
            <Text>Settings</Text>
            
        );
    }
}

export default connect(null, { logUserOut })(HRProfile);
