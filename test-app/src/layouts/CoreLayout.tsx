import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationDrawer from '../components/NavigationDrawer/component/NavigationDrawer';
import { Container } from 'native-base';

class CoreLayout extends React.Component<{}> {
    render() {
        return (
            <Container>
                <NavigationDrawer/>
            </Container>
        );
    }
}

export default CoreLayout;