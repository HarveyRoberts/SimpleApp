import React from 'react';
import { Content,Card,CardItem,Body,Text,Container } from 'native-base';

import HRSigninForm from './HR-SignInForm.js';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged,logUserIn} from '../Actions/index';

import HRHeader from './HR-Header.js';
import HRFooter from './HR-Footer.js';

class HRContent extends React.Component {

    renderContent(){
        if(this.props.isLoggedIn) {
            return(
                <Container>
                    <HRHeader title={"Lists"} showMenu={true}/>
                    <Content>
                        <Card >
                            <CardItem>
                                <Body>
                                    <Text>
                                        My List 1
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card >
                            <CardItem>
                                <Body>
                                    <Text>
                                        My List 2
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card >
                            <CardItem>
                                <Body>
                                    <Text>
                                        My List 3
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                    <HRFooter/>
                </Container>
            );
        }else{
            return(
                <Container>
                    <HRHeader title={"Sign In"}/>
                    <Content>
                        <HRSigninForm/>
                    </Content>
                </Container>
            );
        }
    }

    render() {
        return (
            <Container>
                {this.renderContent()}

            </Container>
        );
    }
}


const mapStateToProps = state => {
    return {
        isLoggedIn:state.auth.isLoggedIn
    };
};

export default connect(mapStateToProps, {emailChanged,passwordChanged,logUserIn})(HRContent);
