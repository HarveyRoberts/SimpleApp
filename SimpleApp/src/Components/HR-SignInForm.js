import React from 'react';
import { ActivityIndicator, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, logUserIn } from '../Actions/index';
import HRInput from './HR-Input';


class HRSigninForm extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
        headerRight: 
        <TouchableOpacity style={{marginRight:10}}>
            <Text>Sign Up</Text>
        </TouchableOpacity>
    }

    onEmailChanged(text) {
        this.props.emailChanged(text);
        console.log(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
        console.log(text);
    }

    onSignIn() {
        const { email, password } = this.props;
        this.props.logUserIn({ email, password });
    }

    showError() {
        if (this.props.error === 'Invalid email or password.') {
            return (
                <Text style={{ color: 'red' }}>
                    {this.props.error}
                </Text>
            );
        }
    }

    showContent() {
        if (this.props.loading) {
            return (
                <ActivityIndicator size="large" style={{ marginTop: 240 }} color="#1898ff" />
            );
        }
            return (
                <View style={{marginTop:15}}>
                    {this.showError()}
                    <View>
                        <HRInput 
                        label='Email'
                        onChangeText={this.onEmailChanged.bind(this)} 
                        value={this.props.email} 
                        />
                    </View>
                    <View>
                        <HRInput 
                        label='Password'
                        secureTextEntry 
                        onChangeText={this.onPasswordChanged.bind(this)} 
                        value={this.props.password} 
                        />
                    </View>
                    <TouchableOpacity
                    style={{width:180,height:50,marginTop:20,backgroundColor:'#4387fd',alignItems:'center',alignContent:'center',alignSelf:'center',justifyContent:'center',borderRadius:50}} 
                    onPress={this.onSignIn.bind(this)}
                    >
                        <Text style={{fontSize:21,color:'white'}}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    }

    render() {
        return (
            <View>
                {this.showContent()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    });

export default connect(mapStateToProps, { emailChanged, passwordChanged, logUserIn })(HRSigninForm);
