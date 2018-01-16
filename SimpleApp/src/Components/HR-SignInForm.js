import React from 'react';
import {Form,Item,Label,Input,Button,Text} from 'native-base';
import {TextInput} from 'react-native';
import HRButtonFull from './HR-ButtonFull';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../Actions/index';

class HRSigninForm extends React.Component {

    onEmailChanged(text) {
        this.props.emailChanged(text);
        console.log(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
        console.log(text);
    }

    render(){
        return(
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    /*since it is a callback we need to bind a make a reference to this*/
                    <TextInput onChangeText={this.onEmailChanged.bind(this)} value={this.props.email}/>
                </Item>
                <Item floatingLabel last>
                    <Label>Password</Label>
                    <TextInput secureTextEntry={true} onChangeText={this.onPasswordChanged.bind(this)} value={this.props.password}/>
                </Item>
                <HRButtonFull onPress={() => console.log(this.props.email)}/>
            </Form>
        );

    }
}

const mapStateToProps = state => {
    return {
        email:state.auth.email,
        password:state.auth.password
    };
};

export default connect(mapStateToProps, {emailChanged,passwordChanged})(HRSigninForm);