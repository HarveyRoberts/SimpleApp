import React from 'react';
import {Footer,FooterTab,Button,Icon, Text} from 'native-base';


export default class HRFooter extends React.Component {
    render(){
        return (
            <Footer>
                <FooterTab>
                    <Button vertical onPress={this.props.onPressHome}>
                        <Icon name="md-home" style={styles.icon}/>
                        <Text style={styles.text}>Home</Text>
                    </Button>
                    <Button vertical onPress={this.props.onPressLists}>
                        <Icon name="ios-paper" style={styles.icon}/>
                        <Text style={styles.text}>Lists</Text>
                    </Button>
                    <Button vertical onPress={this.props.onPressProfile}>
                        <Icon name="md-person" style={styles.icon}/>
                        <Text style={styles.text}>Profile</Text>
                    </Button>
                    <Button vertical onPress={this.props.onPressSettings}>
                        <Icon name="md-settings" style={styles.icon}/>
                        <Text style={styles.text}>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = {
    text: {
        fontSize:11,
        color:'#727272'
    },
    icon:{
        color:'#727272'
    }

}