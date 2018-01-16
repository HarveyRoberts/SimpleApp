import React from 'react';
import {Footer,FooterTab,Button,Icon} from 'native-base';


export default class extends React.Component {
    render(){
        return (
            <Footer>
                <FooterTab>
                    <Button vertical>
                        <Icon name="apps" />
                    </Button>
                    <Button vertical>
                        <Icon name="camera" />
                    </Button>
                    <Button vertical active>
                        <Icon active name="navigate" />
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}