import React from 'react';
import { ActivityIndicator, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, logUserIn } from '../Actions/index';


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
        this.props.navigation.navigate('Main');
        //const { email, password } = this.props;
        //this.props.logUserIn({ email, password });
    }

    showError() {
        if (this.props.error === 'Invalid email or password.') {
            return (
                            <Text style={{ color: 'white' }}>
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
                <View>
                    {this.showError()}
                    <View>
                        <TextInput 
                        onChangeText={this.onEmailChanged.bind(this)} 
                        value={this.props.email} 
                        />
                    </View>
                    <View>
                        <TextInput 
                        secureTextEntry 
                        onChangeText={this.onPasswordChanged.bind(this)} 
                        value={this.props.password} 
                        />
                    </View>
                    <TouchableOpacity
                    style={{ width: 320, paddingLeft: 115 }} 
                    onPress={this.onSignIn.bind(this)}
                    >
                        <Text>
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
