import React from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, logUserIn } from '../Actions/index';
import HRInput from './HRInputs/HRInput';
import HRMessage from './HRMessages/HRMessage';
import HRHeaderCenterGradient from './HRHeaders/HRHeaderCenterGradient';

class HRSigninForm extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
        headerRight: 
        <TouchableOpacity style={{ marginRight: 10 }}>
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
                <HRMessage 
                textColor='white' 
                bgColor='red' 
                message={this.props.error}
                />
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
                    <HRHeaderCenterGradient 
                    titleColor='white' 
                    colors={['#04c2f2', '#03A9F5']}
                    title='Sign In' 
                    subtitle='Enter your email and password' 
                    bgColor='#03A9F5' 
                    subtitleColor='white' 
                    titleSize={28}
                    subtitleSize={18}
                    />
                    <ScrollView>
                        {this.showError()}
                        <HRInput 
                        onChangeText={this.onEmailChanged.bind(this)} 
                        value={this.props.email} 
                        placeholder='Email'
                        />
                        <HRInput
                        onChangeText={this.onPasswordChanged.bind(this)} 
                        placeholder='Password'
                        value={this.props.password} 
                        />
                        <TouchableOpacity
                        style={{ 
                            width: 180, 
                            height: 50, 
                            marginTop: 20, 
                            backgroundColor: '#03A9F5', 
                            alignItems: 'center', 
                            alignContent: 'center', 
                            alignSelf: 'center', 
                            justifyContent: 'center', 
                            borderRadius: 50 
                        }} 
                        onPress={this.onSignIn.bind(this)}
                        >
                            <Text style={{ fontSize: 21, color: 'white' }}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
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
