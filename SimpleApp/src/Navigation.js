
import React from 'react';
import HRSignInForm from './Components/HR-SignInForm';
import HRHome from './Components/HR-Home';
import HRLists from './Components/HR-Lists';
import HRProfile from './Components/HR-Profile';
import HRSettings from './Components/HR-Settings';
import  HRHandleList from './Components/HR-HandleList';
import  HRCreateList from './Components/HR-CreateList';

import {
    TabNavigator,
  } from 'react-navigation';
  
  const Navigation = TabNavigator({
    Main: { screen: HRHome },
    Setup: { screen: HRLists },
    
  });
  export default Navigation;
