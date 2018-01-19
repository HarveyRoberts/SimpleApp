
import React from 'react';
import {Scene, Router,Stack} from 'react-native-router-flux';
import HRSignInForm from './Components/HR-SignInForm';
import HRHome from './Components/HR-Home';
import HRLists from './Components/HR-Lists';
import HRProfile from './Components/HR-Profile';
import HRSettings from './Components/HR-Settings';

const RootNavigator = () => {
    return (
        <Router>
            <Stack key="root" >
                <Scene key="Auth" initial hideNavBar>
                    <Scene key="SignIn" component={HRSignInForm}/>
                </Scene>
                <Scene key="Main" hideNavBar>
                    <Scene key="Home" component={HRHome} title='Home' />
                    <Scene key="Lists" component={HRLists} title='Lists' />
                    <Scene key="Profile" component={HRProfile} title='Profile' />
                    <Scene key="Settings" component={HRSettings} title='Settings'/>
                </Scene>
            </Stack>
        </Router>

    );
};

export default RootNavigator;