import React from 'react';
import { Content } from 'native-base';

import HRSigninForm from './HR-SignInForm.js';

export default class HRContent extends React.Component {
    render() {
        return (
            <Content>
                <HRSigninForm/>
            </Content>
        );
    }
}
