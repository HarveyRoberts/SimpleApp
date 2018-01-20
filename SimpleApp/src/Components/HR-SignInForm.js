import React from 'react';
import {Form,Item,Label,Input,Button,Card,CardItem,Body,Text,Container,Content} from 'native-base';
import HRHeader from './HR-Header';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged,logUserIn} from '../Actions/index';
import {ActivityIndicator} from 'react-native';

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
        }
    }

    showContent(){
        if(this.props.loading) {
            return (
                <ActivityIndicator size="large" style={{marginTop:240}} color="#1898ff" />
            );
        }else {
            return (
                <Form>
                    <HRHeader title='Welcome'/>
                    {this.showError()}
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input onChangeText={this.onEmailChanged.bind(this)} value={this.props.email}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} onChangeText={this.onPasswordChanged.bind(this)} value={this.props.password}/>
                    </Item>
                    <Button primary style={{width:320, paddingLeft:115}}  onPress={this.onSignIn.bind(this)}>
                        <Text>
                            Sign In
                        </Text>
                    </Button>
                </Form>
            );
        }
    }

    render(){
        return(
            <Content>
                <Form>
                    {this.showContent()}
                </Form>
            </Content>
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