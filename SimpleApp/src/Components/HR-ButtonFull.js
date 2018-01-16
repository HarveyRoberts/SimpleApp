import React from 'react';
import {Button,Text} from 'native-base';


export default class HRButtonFull extends React.Component {
    render(){
        return(
            <Button style={styles.signInButton} onPress={this.props.onPress}>
                <Text style={styles.signInButtonText}>
                    Sign In
                </Text>
            </Button>
        );

    }
}

const styles = {
    signInButton: {
        flex:1,
        backgroundColor: '#1898ff'
    },
    signInButtonText: {
        flex:1,
        textAlign:'center'
    }
}