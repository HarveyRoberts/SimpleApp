import React from 'react';
import {Form,Item,Label,Input,Button,Card,CardItem,Body,Text,Spinner,Container} from 'native-base';
import HRButtonFull from './HR-ButtonFull';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged,logUserIn} from '../Actions/index';

class HRSigninForm extends React.Component {

    onEmailChanged(text) {
        this.props.emailChanged(text);
        console.log(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
        console.log(text);
    }

    onSignIn(){
        const {email, password} = this.props;
        this.props.logUserIn({email,password});
    }

    showError(){
        if(this.props.error === 'Invalid email or password.') {
            return (
                <Card >
                    <CardItem style={{backgroundColor:'red'}}>
                        <Body>
                            <Text style={{color:'white'}}>
                                {this.props.error}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            );
        }else if(this.props.error === 'Success!') {
            return (
                <Card >
                    <CardItem style={{backgroundColor:'#5ecd6e'}}>
                        <Body>
                        <Text style={{color:'white'}}>
                            {this.props.error}
                        </Text>
                        </Body>
                    </CardItem>
                </Card>
            );
        }
    }

    showContent(){
        if(this.props.loading) {
            return (
                <Spinner color='blue' />
            );
        }else {
            return (
                <Form>
                    {this.showError()}
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input onChangeText={this.onEmailChanged.bind(this)} value={this.props.email}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} onChangeText={this.onPasswordChanged.bind(this)} value={this.props.password}/>
                    </Item>
                    <HRButtonFull onPress={this.onSignIn.bind(this)}/>
                </Form>
            );
        }
    }

    render(){
        return(
            <Form>
                {this.showContent()}
            </Form>
        );

    }
}

const mapStateToProps = state => {
    return {
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    };
};

export default connect(mapStateToProps, {emailChanged,passwordChanged,logUserIn})(HRSigninForm);